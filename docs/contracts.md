# Smart contracts

Posted.art uses smart contracts for the ownership lifecycle of digital content represented as Art Certificates, including minting, ownership tracking, and creator revenue distribution.

The contract architecture separates:
- content participation (Create & Earn)
- content ownership (Art Certificates)


---

## Contract model

Posted.art uses three contract types:

- ERC‑1155 contract for Art Certificates (edition‑based NFTs)  
- ERC‑721 personal postcard NFT reference, separate from standard hosted Postcards
- Shop contract for primary Art Certificate sales execution  

These contracts together support the product model defined in the platform documentation.

---

## ERC‑1155 (Art Certificates)

The ERC‑1155 contract governs edition‑based ownership tokens known as Art Certificates.

This contract supports:
- multiple token types within a single collection  
- optional maximum supply per token  
- unlimited editions where no cap is defined  
- creator royalty participation  
- transfer and burn functionality  

The Shop can initialize an edition cap from a signed purchase quote. The collection enforces the configured cap during minting, but its administrator can update the cap through `setMaxSupply`, provided it is not below the current total supply. Caps are therefore not immutable at the contract level.

This enables Posted.art to support:
- open editions  
- limited editions  
- future specialized releases 

ERC‑1155 tokens represent ownership of visual content from the shared Posted.art content library.

Ownership is optional and separate from Postcards usage.

---

## ERC‑721 reference (personal postcard NFTs)

`PostedArt721.sol` is a reference for individually minted personal postcard NFTs. It supports role-restricted minting, token metadata, and owner or approved-operator burning, with no pricing or royalty logic.

Standard hosted Postcards are not ERC‑721 minting transactions. This reference should not be interpreted as an NFT ownership requirement for sending or receiving a Postcard.

---

## Shop contract (primary Art Certificate sales)

The Shop contract executes primary Art Certificate sales.

It is responsible for:
- verifying mint authorization  
- executing primary sale payments  
- splitting revenue between creator and platform  
- minting Art Certificates via the ERC‑1155 contract  

Posted.art's primary Art Certificate sale model gives 90% of the sale price to the creator and 10% to the platform.

The Shop's split is set through `primaryFeeBps` at deployment and is immutable afterwards. The Solidity source accepts a deployment parameter; it does not hardcode a 90% split for every possible deployment.

Pricing logic is not stored directly on-chain.

Instead:
- pricing parameters are prepared server‑side  
- users sign authoritative wallet transactions  
- the contract verifies signed purchase data  

This architecture reduces on‑chain complexity while preserving verifiable on‑chain sale execution.

---

## Economic invariants

The contracts distinguish fixed deployment settings from administrator-controlled collection state.

Primary Art Certificate sales:
- creators receive 90% of the sale price  
- the platform receives 10%  

This revenue split is fixed at contract deployment and cannot be changed.

Secondary Art Certificate transfers and secondary sales:
- the ERC‑1155 contract reports a default royalty of 3%
- royalties are implemented through ERC‑2981  

ERC‑2981 reports royalty information. Payment of secondary royalties depends on the marketplace or protocol; token transfers do not automatically collect them.

Edition supply:
- tokens may define a fixed maximum supply  
- tokens may remain unlimited if no supply cap is set  

The collection enforces the current supply cap during minting. Administrators can change that cap, so it must not be described as immutable after initial definition.

Current deployment settings and administrator permissions should be checked when assessing a specific Art Certificate.

---

## Use vs ownership

A core design principle of Posted.art is the separation of:

- content usage (Postcards)  
- content ownership (Art Certificates)

The ownership contracts support minting, ownership tracking, primary-sale execution, and royalty information. Postcard usage does not require NFT ownership or interaction with these ownership contracts.

Users can create and send Postcards without acquiring ownership and without interacting with ownership smart contracts.

---

## Blockchain execution

Smart contracts are involved only in ownership purchase flows. NFT transaction parameters are prepared server‑side and confirmed by the user via a wallet transaction. Postcard payments and entitlements, including network-native token flows, Telegram Stars, and app-store subscription flows where available, are processed separately from ownership smart contract execution.

This keeps Postcards usage and NFT ownership as distinct product flows.

---

## Supported networks

Posted.art supports multiple EVM‑compatible networks.

Contract deployments and supported networks may evolve over time as the platform expands.

Network‑specific deployment details are not required for normal product usage.
