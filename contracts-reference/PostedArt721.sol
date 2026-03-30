// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title PostedArt721
 * @notice Minimal standard ERC-721 used for personal postcards.
 *         - No royalties
 *         - No pricing
 *         - Mint restricted to MINTER_ROLE (backend/admin)
 *         - Owner may burn their token
 *         - Per-token tokenURI stored on-chain (e.g., ipfs://CID)
 */
contract PostedArt721 is ERC721, AccessControl {
    using Strings for uint256;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    // Optional provenance: sha256 hash of the raw content (uploaded image)
    mapping(uint256 => bytes32) public contentHash;

    // Simple per-token URI storage
    mapping(uint256 => string) private _tokenURIs;

    // Auto-incrementing token id
    uint256 private _nextId = 1;

    // Contract-level metadata URI
    string private _contractURI;

    /**
     * @notice Uses the deployer (msg.sender) as DEFAULT_ADMIN_ROLE to keep admin consistent with other contracts (e.g., treasury).
     */
    constructor(string memory initialContractURI) ERC721("Posted.art", "POST") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _contractURI = initialContractURI;
    }

    /**
     * @notice Mint a single standard ERC-721 personal postcard NFT to `to`.
     * @dev Only callers with MINTER_ROLE may mint.
     * @param to Recipient wallet
     * @param tokenURI_ Metadata URI (e.g., ipfs://CID/metadata.json or ipfs://CID)
     * @param contentSha256 Optional SHA-256 hash of the original content (0 to skip)
     * @return tokenId Newly minted token id
     */
    function mintTo(
        address to,
        string calldata tokenURI_,
        bytes32 contentSha256
    ) external onlyRole(MINTER_ROLE) returns (uint256 tokenId) {
        tokenId = _nextId++;
        // Write state first to avoid reentrancy-benign during ERC721Receiver hook
        _tokenURIs[tokenId] = tokenURI_;
        if (contentSha256 != bytes32(0)) {
            contentHash[tokenId] = contentSha256;
        }
        _safeMint(to, tokenId);
    }

    /**
     * @notice Owner may burn their postcard.
     */
    function burn(uint256 tokenId) external {
        require(_isAuthorized(_ownerOf(tokenId), msg.sender, tokenId), "PostedArt721: not owner nor approved");
        _burn(tokenId);
        delete _tokenURIs[tokenId];
        delete contentHash[tokenId];
    }

    // -------------------- Metadata --------------------

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "PostedArt721: invalid token");
        return _tokenURIs[tokenId];
    }

    // -------------------- Contract-level Metadata --------------------

    /**
     * @notice Returns the contract-level metadata URI.
     */
    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    /**
     * @notice Sets the contract-level metadata URI.
     * @dev Restricted to DEFAULT_ADMIN_ROLE.
     */
    function setContractURI(string calldata newContractURI) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _contractURI = newContractURI;
    }

    // -------------------- Views & Admin --------------------

    function nextId() external view returns (uint256) {
        return _nextId;
    }

    /**
     * @notice Grant the ability to mint to `account`.
     * @dev Convenience function for scripts/UIs; equivalent to AccessControl.grantRole.
     */
    function grantMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(MINTER_ROLE, account);
    }

    /**
     * @notice Revoke MINTER_ROLE from `account`.
     */
    function revokeMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(MINTER_ROLE, account);
    }

    // ERC-165
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}