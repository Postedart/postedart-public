// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {ERC1155Supply} from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import {ERC1155Burnable} from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC1155Pausable} from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import {ERC2981} from "@openzeppelin/contracts/token/common/ERC2981.sol";
import {IPostedArt1155} from "./interfaces/IPostedArt1155.sol";

/// @title PostedArt1155
/// @notice ERC-1155 with per-token URIs, roles, burn, supply tracking, royalties, and pause.
contract PostedArt1155 is
    ERC1155,
    ERC1155Supply,
    ERC1155Burnable,
    AccessControl,
    ERC1155Pausable,
    ERC2981,
    IPostedArt1155
{
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    // per-token URI storage (explicit URIs, not templating)
    mapping(uint256 => string) private _tokenURIs;

    // ----- Edition caps (0 = uncapped) -----
    mapping(uint256 => uint256) public maxSupply;

    event MaxSupplySet(uint256 indexed id, uint256 cap);
    event EditionClosed(uint256 indexed id, uint256 finalSupply);

    // optional collection metadata endpoint (OpenSea/marketplaces)
    string private _contractURI;

    /// @param admin DEFAULT_ADMIN_ROLE holder (treasury / Ledger)
    /// @param royaltyReceiver default royalty receiver (usually sales wallet / postedart.eth)
    constructor(
        address admin,
        address royaltyReceiver,
        uint96 /*royaltyFeeNumerator*/
    ) ERC1155("") {
        require(admin != address(0), "admin=0");
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        // Secondary-sale royalties are hardcoded to 3% (300 bps).
        _setDefaultRoyalty(royaltyReceiver, 300);
    }

    /// @notice Set or tighten the edition cap for a token id. 0 means uncapped.
    /// @dev Cap cannot be set below current totalSupply. If you want to "close" an edition,
    ///      use closeMinting(id) which locks cap to current totalSupply.
    function setMaxSupply(uint256 id, uint256 cap)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        require(cap >= totalSupply(id), "cap < minted");
        maxSupply[id] = cap;
        emit MaxSupplySet(id, cap);
    }

    /// @notice Set the edition cap for a token id once by a minter. Can only be set once and must be > 0.
    function setMaxSupplyOnce(uint256 id, uint256 cap)
        external
        onlyRole(MINTER_ROLE)
    {
        require(cap > 0, "cap=0");
        require(maxSupply[id] == 0, "cap already set");
        require(cap >= totalSupply(id), "cap < minted");
        maxSupply[id] = cap;
        emit MaxSupplySet(id, cap);
    }

    /// @notice Remaining mintable quantity for an id. Returns uint256 max when uncapped.
    function remainingSupply(uint256 id) external view returns (uint256) {
        uint256 cap = maxSupply[id];
        if (cap == 0) return type(uint256).max;
        uint256 minted = totalSupply(id);
        return cap > minted ? cap - minted : 0;
    }

    // -------------------- Mint / URI --------------------

    /// @notice Mint tokens and set the per-token URI if not yet set.
    /// @dev MINTER_ROLE required.
    function mintTo(
        address to,
        uint256 id,
        uint256 amount,
        string calldata uri_
    ) external onlyRole(MINTER_ROLE) whenNotPaused {
        // set URI on first mint only (immutable by default)
        if (bytes(_tokenURIs[id]).length == 0) {
            _tokenURIs[id] = uri_;
        }
        // enforce edition cap if configured
        uint256 cap = maxSupply[id];
        if (cap != 0) {
            require(totalSupply(id) + amount <= cap, "cap exceeded");
        }
        _mint(to, id, amount, "");
    }

    /// @notice Return the per-token URI for id.
    function uri(uint256 id) public view override returns (string memory) {
        string memory u = _tokenURIs[id];
        require(bytes(u).length != 0, "URI not set");
        return u;
    }


    // -------------------- Contract metadata --------------------

    /// @notice Collection-level metadata JSON (logo, description, feeRecipient, etc.)
    function contractURI() external view returns (string memory) {
        return _contractURI;
    }

    /// @notice Set collection metadata endpoint.
    function setContractURI(string calldata newContractURI)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        _contractURI = newContractURI;
    }

    // -------------------- Admin controls --------------------

    function grantMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(MINTER_ROLE, account);
    }

    function revokeMinter(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(MINTER_ROLE, account);
    }

    function pause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }

    /// @notice Permanently lock an edition so no further mints can occur.
    /// @dev Sets cap to current totalSupply. Cannot be reversed (you may only raise cap via setMaxSupply before first mint if desired).
    function closeMinting(uint256 id) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 minted = totalSupply(id);
        maxSupply[id] = minted;
        emit EditionClosed(id, minted);
    }

    // -------------------- Internal / overrides --------------------

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155, ERC1155Supply, ERC1155Pausable) {
        super._update(from, to, ids, values);
    }

    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        public
        view
        override(ERC2981, IPostedArt1155)
        returns (address receiver, uint256 royaltyAmount)
    {
        return super.royaltyInfo(tokenId, salePrice);
    }

    function supportsInterface(bytes4 iid)
        public
        view
        override(ERC1155, AccessControl, ERC2981, IPostedArt1155)
        returns (bool)
    {
        if (iid == type(IPostedArt1155).interfaceId) return true;
        return super.supportsInterface(iid);
    }
}