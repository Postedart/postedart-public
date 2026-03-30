// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IPostedArt1155} from "./interfaces/IPostedArt1155.sol";

/// @notice Primary-sale shop for Posted.art NFTs.
///         - Receives native token (ETH/BNB/etc.) from the buyer (msg.value)
///         - Splits primary sale using an immutable basis-points fee:
///             * creator payout → royaltyReceiver (from signed quote)
///             * platform payout → beneficiary
///         - Mints the ERC-1155 NFT directly to the buyer (no inventory)
///         - Protects minting via EIP-712 signed quotes (pricingSigner)
contract PostedArtShop is AccessControl, Pausable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    // --- Roles ---
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE"); // can pause

    // --- Immutable config ---
    IPostedArt1155 public immutable collection; // PostedArt1155

    // --- Beneficiary for platform primary revenue (e.g., Sales wallet) ---
    address public beneficiary;

    // --- Primary sale split (basis points). Immutable, set at deploy time.
    uint96 public immutable primaryFeeBps;

    // --- Off-chain pricing via EIP-712 signed quotes ---
    address public immutable pricingSigner; // backend key that signs price quotes
    // prevent replay per (buyer, nonce)
    mapping(address => mapping(uint256 => bool)) public nonceUsed;

    // EIP-712 domain separator and typehashes (dynamic cache to survive chainId changes)
    bytes32 private _cachedDomainSeparator;
    uint256 private _cachedChainId;
    string private constant EIP712_NAME = "PostedArtShop";
    string private constant EIP712_VERSION = "1";
    bytes32 public constant EIP712_DOMAIN_TYPEHASH = keccak256(
        "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
    );
    // keccak256("PriceQuote(address buyer,address to,address royaltyReceiver,uint256 id,uint256 amount,uint256 maxSupply,uint256 totalPriceWei,bytes32 tokenUriHash,uint256 deadline,uint256 nonce)")
    bytes32 public constant PRICE_TYPEHASH = keccak256(
        "PriceQuote(address buyer,address to,address royaltyReceiver,uint256 id,uint256 amount,uint256 maxSupply,uint256 totalPriceWei,bytes32 tokenUriHash,uint256 deadline,uint256 nonce)"
    );

    // --- Events ---
    event BeneficiaryUpdated(address indexed newBeneficiary);
    event Purchased(
        address indexed buyer,
        address indexed to,
        uint256 indexed id,
        uint256 amount,
        uint256 totalPriceWei,
        address royaltyReceiver,
        uint96 feeBps,
        bytes32 quoteHash
    );
    event NonceConsumed(address indexed buyer, uint256 indexed nonce);
    event SweptERC20(address indexed token, address indexed to, uint256 amount);
    event SweptETH(address indexed to, uint256 amount);

    error InvalidAddress();
    error InvalidAmount();
    error InvalidMsgValue();
    error InvalidSignature();
    error DeadlineExpired();
    error NonceUsed();
    error CapMismatch();

    constructor(
        address admin,
        address _collection,
        address _beneficiary,
        address _pricingSigner,
        uint96 _primaryFeeBps
    ) {
        if (admin == address(0) || _collection == address(0) || _beneficiary == address(0)) revert InvalidAddress();
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(MANAGER_ROLE, admin);
        collection = IPostedArt1155(_collection);
        beneficiary = _beneficiary;
        require(_primaryFeeBps <= 10_000, "fee too high");
        primaryFeeBps = _primaryFeeBps;
        if (_pricingSigner == address(0)) revert InvalidAddress();
        pricingSigner = _pricingSigner;
        _cachedChainId = block.chainid;
        _cachedDomainSeparator = keccak256(
            abi.encode(
                EIP712_DOMAIN_TYPEHASH,
                keccak256(bytes(EIP712_NAME)),
                keccak256(bytes(EIP712_VERSION)),
                _cachedChainId,
                address(this)
            )
        );
        emit BeneficiaryUpdated(_beneficiary);
    }

    function _buildDomainSeparator(uint256 chainId) private view returns (bytes32) {
        return keccak256(
            abi.encode(
                EIP712_DOMAIN_TYPEHASH,
                keccak256(bytes(EIP712_NAME)),
                keccak256(bytes(EIP712_VERSION)),
                chainId,
                address(this)
            )
        );
    }

    /// @notice Current EIP-712 domain separator (recomputed if chainId changed)
    function domainSeparator() public view returns (bytes32) {
        if (block.chainid == _cachedChainId) {
            return _cachedDomainSeparator;
        }
        return _buildDomainSeparator(block.chainid);
    }

    // -------------------- Admin / Ops --------------------

    function setBeneficiary(address newBeneficiary) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (newBeneficiary == address(0)) revert InvalidAddress();
        beneficiary = newBeneficiary;
        emit BeneficiaryUpdated(newBeneficiary);
    }

    /// @notice Admin-only: recover ERC20 tokens held by this contract to the beneficiary.
    function sweepERC20(address token, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) nonReentrant {
        if (token == address(0)) revert InvalidAddress();
        uint256 balance = IERC20(token).balanceOf(address(this));
        uint256 toSend = amount == type(uint256).max ? balance : amount;
        require(toSend <= balance, "insufficient balance");
        IERC20(token).safeTransfer(beneficiary, toSend);
        emit SweptERC20(token, beneficiary, toSend);
    }

    /// @notice Admin-only: recover ETH held by this contract to the beneficiary.
    function sweepETH(uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) nonReentrant {
        uint256 balance = address(this).balance;
        uint256 toSend = amount == type(uint256).max ? balance : amount;
        require(toSend <= balance, "insufficient balance");
        (bool ok, ) = payable(beneficiary).call{value: toSend}("");
        require(ok, "ETH transfer failed");
        emit SweptETH(beneficiary, toSend);
    }

    function pause() external onlyRole(MANAGER_ROLE) { _pause(); }
    function unpause() external onlyRole(MANAGER_ROLE) { _unpause(); }

    /// @notice Buy and mint using an off-chain EIP-712 price quote (native token path).
    function buyAndMintWithQuote(
        address to,
        uint256 id,
        uint256 amount,
        uint256 maxSupply,
        string calldata tokenUri,
        address royaltyReceiver,
        uint256 totalPriceWei,
        uint256 deadline,
        uint256 nonce,
        bytes calldata quoteSig
    ) external payable nonReentrant whenNotPaused {
        if (to == address(0)) revert InvalidAddress();
        if (royaltyReceiver == address(0)) revert InvalidAddress();
        if (amount == 0) revert InvalidAmount();
        if (totalPriceWei == 0) revert InvalidAmount();
        if (msg.value != totalPriceWei) revert InvalidMsgValue();
        if (block.timestamp > deadline) revert DeadlineExpired();
        if (nonceUsed[msg.sender][nonce]) revert NonceUsed();

        // Verify EIP-712 quote
        bytes32 tokenUriHash = keccak256(bytes(tokenUri));
        bytes32 structHash = keccak256(
            abi.encode(
                PRICE_TYPEHASH,
                msg.sender,
                to,
                royaltyReceiver,
                id,
                amount,
                maxSupply,
                totalPriceWei,
                tokenUriHash,
                deadline,
                nonce
            )
        );
        bytes32 quoteHash = structHash;
        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", domainSeparator(), structHash));
        address signer = ECDSA.recover(digest, quoteSig);
        if (signer != pricingSigner) revert InvalidSignature();
        nonceUsed[msg.sender][nonce] = true;
        emit NonceConsumed(msg.sender, nonce);

        // Compute primary-sale split
        uint256 royalty = (totalPriceWei * uint256(primaryFeeBps)) / 10_000;
        uint256 remainder = totalPriceWei - royalty;

        if (maxSupply > 0) {
            uint256 currentCap = collection.maxSupply(id);
            if (currentCap == 0) {
                collection.setMaxSupplyOnce(id, maxSupply);
            } else if (currentCap != maxSupply) {
                revert CapMismatch();
            }
        }

        // Mint first (if this reverts, no funds move). Minting does NOT set per-token royalties.
        collection.mintTo(to, id, amount, tokenUri);

        // Then move funds (native token)
        if (royalty > 0) {
            (bool okRoyalty, ) = payable(royaltyReceiver).call{value: royalty}("");
            require(okRoyalty, "royalty transfer failed");
        }
        if (remainder > 0) {
            (bool okBeneficiary, ) = payable(beneficiary).call{value: remainder}("");
            require(okBeneficiary, "beneficiary transfer failed");
        }

        emit Purchased(
            msg.sender,
            to,
            id,
            amount,
            totalPriceWei,
            royaltyReceiver,
            primaryFeeBps,
            quoteHash
        );
    }

    /// @notice Allow the contract to receive ETH (e.g., refunds)
    receive() external payable {}

    /// @notice EIP-5267: return the EIP-712 domain fields
    /// fields bitmap: 0x0f => name, version, chainId, verifyingContract
    function eip712Domain()
        external
        view
        returns (
            bytes1 fields,
            string memory name,
            string memory version,
            uint256 chainId,
            address verifyingContract,
            bytes32 salt,
            uint256[] memory extensions
        )
    {
        fields = 0x0f; // name, version, chainId, verifyingContract
        name = EIP712_NAME;
        version = EIP712_VERSION;
        chainId = block.chainid;
        verifyingContract = address(this);
        salt = bytes32(0);
        extensions = new uint256[](0);
    }
}
