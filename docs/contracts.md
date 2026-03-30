# Smart contracts

Posted.art uses smart contracts for the ownership lifecycle of digital content represented as Art Certificates, including minting, ownership tracking, and creator revenue distribution.

The contract architecture separates:
- content participation (Create & Earn)
- content ownership (Art Certificates)


---

## Contract model

Posted.art uses three contract types:

- ERC‑1155 contract for Art Certificates (edition‑based NFTs)  
- ERC‑721 contract for unique or one‑of‑one NFTs  
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

Edition supply limits are defined at the time of first mint and cannot be changed afterwards.

This enables Posted.art to support:
- open editions  
- limited editions  
- future specialized releases 

ERC‑1155 tokens represent ownership of visual content from the shared Posted.art content library.

Ownership is optional and separate from Postcards usage.

---

## ERC‑721 (unique NFTs)

The ERC‑721 contract supports unique or one‑of‑one NFTs.

This contract is designed for:
- unique digital works  
- future curated or premium releases  
- potential real‑world‑asset‑linked digital representations  

ERC‑721 ownership is not required for normal Postcards usage.

---

## Shop contract (primary Art Certificate sales)

The Shop contract executes primary Art Certificate sales.

It is responsible for:
- verifying mint authorization  
- executing primary sale payments  
- splitting revenue between creator and platform  
- minting Art Certificates via the ERC‑1155 contract  

The creator revenue share for primary Art Certificate sales is fixed at 90%.

This revenue split is enforced by immutable contract logic and cannot be changed after deployment.

Pricing logic is not stored directly on-chain.

Instead:
- pricing parameters are prepared server‑side  
- users sign authoritative wallet transactions  
- the contract verifies signed purchase data  

This architecture reduces on‑chain complexity while preserving verifiable on‑chain sale execution.

---

## Economic invariants

Posted.art enforces key economic rules directly through immutable smart contract logic.

Primary Art Certificate sales:
- creators receive 90% of the sale price  
- the platform receives 10%  

This revenue split is fixed at contract deployment and cannot be changed.

Secondary Art Certificate transfers and secondary sales:
- the ERC‑1155 contract enforces a default royalty of 3%  
- royalties are implemented through ERC‑2981  

Edition supply:
- tokens may define a fixed maximum supply  
- tokens may remain unlimited if no supply cap is set  

Supply caps are immutable after initial definition.

These invariants ensure predictable economic behavior for creators, collectors, and the platform.

---

## Use vs ownership

A core design principle of Posted.art is the separation of:

- content usage (Postcards)  
- content ownership (Art Certificates)

Smart contracts are used only within the ownership lifecycle, including minting, ownership tracking, primary‑sale execution, and on‑chain royalty enforcement. Postcards usage does not require NFT ownership or smart contract interaction.

Users can create and send Postcards without acquiring ownership and without interacting with ownership smart contracts.

---

## Blockchain execution

Smart contracts are involved only in ownership purchase flows. NFT transaction parameters are prepared server‑side and confirmed by the user via a wallet transaction. Standard Postcards payments are processed separately from ownership smart contract execution.

This keeps Postcards usage and NFT ownership as distinct product flows.

---

## Supported networks

Posted.art supports multiple EVM‑compatible networks.

Contract deployments and supported networks may evolve over time as the platform expands.

Network‑specific deployment details are not required for normal product usage.