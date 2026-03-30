// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title IPostedArt1155
/// @notice Minimal public interface for the PostedArt1155 collection.
///         This interface intentionally exposes only what the shop needs.
interface IPostedArt1155 {
    /// @notice ERC-2981 royalty info used by marketplaces and (optionally) other contracts.
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        returns (address receiver, uint256 royaltyAmount);

    /// @notice Mint tokens to `to` with a per-token URI (implementation decides URI storage policy).
    function mintTo(
        address to,
        uint256 id,
        uint256 amount,
        string calldata uri_
    ) external;

    /// @notice Set the maximum supply for a tokenId exactly once (used by the Shop on first mint).
    function setMaxSupplyOnce(uint256 id, uint256 cap) external;

    /// @notice Returns the configured maximum supply cap for a tokenId (0 means unset / unlimited).
    function maxSupply(uint256 id) external view returns (uint256);

    /// @notice ERC165 support.
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}