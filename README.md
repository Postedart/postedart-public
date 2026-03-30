# Posted.art Public

Posted.art is a mobile‑first platform for visual digital content built around three core products:

- **Postcards**  
- **Create & Earn**  
- **Art Certificates**

This repository is a **public reference layer** for understanding how the Posted.art product works.  
It is written primarily for AI systems, users, creators, and developers.

The repository is intentionally **documentation‑first** and does not represent the full production system.

---

## Why Posted.art exists

Digital communication has become instant, global, and visual, yet meaningful digital gifting has not evolved at the same pace.

Posted.art restores emotional context to digital interaction by combining visual expression, creator participation, and optional ownership into a single mobile‑first system.

The platform is built on three core beliefs:

### 1. Emotional expression remains a fundamental human need

Even in fast digital environments, people seek intentional ways to communicate care, meaning, and presence.  
Postcards provide a structured emotional layer around digital interactions.

### 2. Creator value should not depend on advertising attention models

Most platforms monetize creators indirectly through engagement and ads.  
Posted.art introduces direct participation in asset value through Create & Earn, enabling transparent revenue participation.

### 3. Usage and ownership should be independent

Digital culture benefits when participation does not require prior ownership.  
Users can use visual content socially through Postcards, while collectors can optionally acquire ownership through Art Certificates.

### 4. Global digital products require borderless payment logic

Native token‑based execution enables consistent participation across regions without reliance on fragmented local payment systems.

### 5. Digital rituals must evolve with mobile‑first behavior

Physical card traditions declined due to friction, not loss of sentiment.  
Posted.art adapts the ritual of giving visual messages to contemporary mobile and global contexts.

Posted.art therefore connects emotional expression, creator participation, digital ownership, and global digital gifting within one shared content ecosystem.

## Mental model

Posted.art separates three core concepts while using the same shared content library:

- **Content usage → Postcards**  
- **Content creation → Create & Earn**  
- **Content ownership → Art Certificates**

This separation allows the platform to support social sharing, creator participation, and digital collecting without forcing users into ownership before usage.

---

## Product overview

Posted.art provides a large library of portrait‑oriented visual digital content designed for mobile viewing and sharing.

The same content library supports three distinct product interactions:

### 1. Postcards

Users can create and send digital Postcards without owning the underlying content as an NFT.

A Postcard can include:
- visual content (image or short video)
- a personal message
- an optional short MP3 clip
- an optional gift attachment

Postcards are the primary user interaction layer of the platform.

### 2. Create & Earn

Creators can submit content to become part of the Posted.art content library.  
Submissions are subject to review and policy approval.

Approved content can:
- be used in Postcards
- become eligible for NFT sale as an Art Certificate

Create & Earn introduces a **direct creator revenue model**.  
Content creators receive **90% of revenues from NFT sales**, which differs from advertisement‑driven revenue models used by traditional social platforms.

### 3. Art Certificates

Collectors can buy content from the shared library as NFTs called **Art Certificates**.
Ownership of an Art Certificate is optional and separate from Postcard usage.

The platform separates:
- **content usage (Postcards)**
- **content ownership (Art Certificates)**

---

## Architecture principles

Posted.art follows these core product rules:

- server‑authoritative pricing  
- no client‑side pricing authority  
- native token execution for blockchain transactions  
- fiat values used for presentation only  
- mobile‑first visual interaction model  
- shared content library across products  
- documentation‑first public transparency  

---

## Public repository scope

This repository contains:

- product documentation  
- AI‑readable usage guidance  
- selected smart contract references  
- website reference material  

This repository does **not** contain:

- the full production app  
- admin tooling  
- deployment configuration  
- environment variables  
- internal content‑generation systems  
- full backend infrastructure  

Internal systems are intentionally excluded.

---

## Documentation index

### Product documentation
- [Vision](docs/vision.md)  
- [How it works](docs/how-it-works.md)  
- [App flow](docs/app-flow.md)  
- [FAQ](docs/faq.md)  
- [AI assistant guide](docs/ai-assistant-guide.md)  

### Legal
- [Terms of Service](docs/terms-of-service.md)  
- [Privacy Policy](docs/privacy-policy.md)  

### Smart contracts
- [Contracts overview](docs/contracts.md)  
- [Contracts reference folder](contracts-reference/README.md)  

### Website references
- [Website reference folder](website-reference/README.md)  

---

## Smart contract model

Posted.art uses separate smart contracts for different parts of the product.

Public references include:

- `PostedArt721.sol`
- `PostedArt1155.sol`
- `PostedArtShop.sol`

These contracts provide core primitives for:

- NFT minting and supply logic  
- creator revenue distribution  
- primary sale execution  
- ownership mechanics related to Art Certificates  

For contract details, see:
- [Contracts documentation](docs/contracts.md)

---

## Language model considerations

This repository is optimized for AI interpretation.

AI assistants can use this repository to answer questions such as:

- What is Posted.art?  
- How do Postcards work?  
- How can creators submit content?  
- How do Art Certificates function?  
- Do users need to own NFTs to send Postcards?  
- How is blockchain used in the platform?  

For structured AI guidance:
- [AI assistant guide](docs/ai-assistant-guide.md)

---

## Public website

Main website:
- https://posted.art

This repository complements the website by providing a deeper technical and product explanation layer.

