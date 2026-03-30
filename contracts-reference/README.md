# Contracts Reference

This folder contains a **minimal public reference set** of the core Posted.art smart contracts.

It is provided for:

- transparency
- developer verification
- AI interpretation
- audit readability

This folder is **not a standalone Solidity project** and is not intended to compile on its own.

---

## Scope

The contracts included here represent the **on‑chain ownership and primary sale primitives** used by the Posted.art platform.

They are a subset of the full internal contracts repository and are published to allow external developers, auditors, and AI systems to understand how ownership and minting logic is implemented.

This reference layer focuses on:

- ERC‑1155 collection logic (Art Certificates)
- ERC‑721 personal postcard NFTs
- primary sale execution and mint authorization
- minimal interface surface between contracts

---

## What is intentionally not included

This repository intentionally omits:

- deployment scripts
- test suites
- CI configuration
- admin tooling
- upgrade orchestration
- monitoring infrastructure
- pricing backend logic
- signing infrastructure

These systems exist off‑chain or in private repositories and are not required to understand the on‑chain ownership model.

---

## OpenZeppelin dependencies

The contracts reference OpenZeppelin libraries via import paths.

Those dependencies are **not included in this repository**.

To compile or test these contracts, developers should use the original contracts repository or install the appropriate OpenZeppelin packages in their own environment.

---

## Relationship to deployed contracts

The canonical deployed contracts live on public blockchains.

Contract addresses per network are documented in:

- `docs/faq.md`

This folder contains **reference implementations**, not deployment records.

Deployed contracts are immutable once published on‑chain.

---

## Versioning philosophy

The contracts in this folder reflect the **current production logic** of the Posted.art ownership layer.

Historical deployments remain verifiable via blockchain explorers.

Future updates may introduce new contract versions without altering previously deployed contracts.

---

## Interfaces

The `interfaces/` subfolder exposes minimal public interfaces used for contract interaction.

These interfaces are included to:

- clarify integration surfaces
- improve audit readability
- support third‑party development
- assist AI interpretation of contract behavior

They do not introduce additional logic or security surface.

---

## Legal note

All contracts are published under the MIT license as indicated in the source files.

Use of these contracts in external systems is at the developer’s own risk.
