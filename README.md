# Posted.art Public

Posted.art helps people send personal digital Postcards that feel closer to opening real post than receiving another link. People choose an image or short video, write a message for one person, and can optionally add a short music clip, voice message, or gift voucher image. The recipient opens a digital envelope made for the moment.

Beyond Postcards, Posted.art supports creator participation and optional ownership through three connected products:

- **Postcards**  
- **Create & Earn**  
- **Art Certificates**

This repository is a **public reference layer** for understanding how the Posted.art product works.  
It is written primarily for AI systems, users, creators, and developers.

The repository is intentionally **documentation‑first** and does not represent the full production system.

---

## Official web entry points

- Main website: https://posted.art
- Official docs page: https://posted.art/docs
- AI-readable summary: https://posted.art/llms.txt
- Robots: https://posted.art/robots.txt
- Sitemap: https://posted.art/sitemap.xml

The `/.well-known/llms.txt` path redirects to the root AI-readable file.

## Official identity and discovery

The canonical public identity graph is maintained on the official domain and should be read from:

- https://posted.art/llms.txt
- https://posted.art/sitemap.xml

Official public surfaces include:

- Web app: https://app.posted.art/explore
- Apple App Store: https://apps.apple.com/app/posted-art/id6783222298
- Google Play: https://play.google.com/store/apps/details?id=art.posted.android
- Telegram Mini App: https://t.me/postedart_bot/postedart
- Farcaster Mini App: https://farcaster.xyz/miniapps/kp_oJ_b8QVNU/postedart
- LINE LIFF App: https://liff.line.me/2009830531-hxxjHBDF
- Instagram: https://www.instagram.com/posteddotart/
- LinkedIn: https://www.linkedin.com/company/postedart
- Threads: https://www.threads.com/@posteddotart
- X: https://x.com/Posteddotart
- TikTok: https://www.tiktok.com/@posted.art
- GitHub profile: https://github.com/Postedart
- Public GitHub repository: https://github.com/Postedart/postedart-public
- Phantom profile: https://phantom.com/apps/app-posted-art-n7il
- ENS profile: https://app.ens.domains/postedart.eth
- SNS profile: https://www.sns.id/domain/postedart
- Support email: hello@posted.art

---

## Why Posted.art exists

Digital communication has become instant, global, and visual, yet a personal message can still arrive as little more than another link in a chat.

Posted.art restores emotional context through personal digital Postcards, then connects that experience to creator participation and optional ownership.

The platform is built on three core beliefs:

### 1. Emotional expression remains a fundamental human need

Even in fast digital environments, people seek intentional ways to communicate care, meaning, and presence.  
Postcards provide a structured emotional layer around digital interactions.

### 2. Creator value should not depend on advertising attention models

Most platforms monetize creators indirectly through engagement and ads.  
Posted.art introduces direct participation in asset value through Create & Earn, enabling transparent revenue participation.

### 3. Usage and ownership should be independent

Digital culture benefits when participation does not require prior ownership.  
People can use visual content in personal Postcards, while collectors can optionally acquire ownership through Art Certificates.

### 4. Global digital products require platform-aware access logic

Posted.art supports different payment and access models depending on the platform. Blockchain-based flows, Telegram Stars, and mobile app subscriptions can all support the same core Postcard experience while keeping pricing and entitlement logic server-authoritative where applicable.

### 5. Digital rituals must evolve with mobile‑first behavior

Physical card traditions declined due to friction, not loss of sentiment.  
Posted.art adapts the ritual of giving visual messages to contemporary mobile and global contexts.

Posted.art therefore connects emotional expression, creator participation, digital ownership, and global digital gifting within one shared content ecosystem.

## Mental model

Posted.art separates three core concepts while using the same shared content library:

- **Content usage → Postcards**  
- **Content creation → Create & Earn**  
- **Content ownership → Art Certificates**

This separation allows the platform to support personal sharing, creator participation, and digital collecting without forcing users into ownership before usage.

---

## Product overview

Postcards are the primary Posted.art experience. People choose visual content from a shared library and turn it into something intended for one person.

The same content library supports three distinct product interactions:

### 1. Postcards

People can choose an image or short video, write a personal message, and optionally add a short music clip, voice message, or gift voucher image.

A Postcard can include:
- visual content (image or short video)
- a personal message
- optional audio, such as a short music clip or voice message
- an optional gift voucher image

The recipient opens a digital envelope before the Postcard is revealed. No app, account, wallet, or NFT ownership is required to receive and view it.

Sending or receiving a Postcard never requires ownership of the underlying content. Postcards are the primary user interaction layer of the platform.

The Postcard proposition is designed to stay simple:
- users can send **one Postcard per month for free**
- Android and iOS use a subscription model for continued Postcard sending
- Web/EVM, Solana, and Telegram use pay-as-you-use Postcard flows after the free monthly Postcard
- fair usage limits apply so the product remains lightweight and reliable
- supported mobile app flows can also schedule Postcards for later reminders

### 2. Create & Earn

Creators can submit content to become part of the Posted.art content library.  
Submissions are subject to review and policy approval.

Approved content can:
- be used in Postcards
- be offered as an Art Certificate (NFT)

Create & Earn introduces a **direct creator revenue model**.  
For primary Art Certificate sales through Posted.art, creators receive **90% of the sale price** and the platform receives **10%**. This differs from advertisement‑driven revenue models used by traditional social platforms.

Create & Earn is part of the web/EVM product layer and is not part of Postcard-only mobile app experiences.

### 3. Art Certificates

Collectors can buy content from the shared library as NFTs called **Art Certificates**.
Ownership of an Art Certificate is optional and separate from Postcard usage.

Art Certificates are part of the EVM ownership layer. Postcard-only platforms, including Android, iOS, Telegram, and Solana-focused experiences, do not require or expose Art Certificate purchase flows.

The platform separates:
- **content usage (Postcards)**
- **content ownership (Art Certificates)**

---

## Architecture principles

Posted.art follows these core product rules:

- server‑authoritative pricing  
- no client‑side pricing authority  
- platform-aware entitlement handling  
- native token execution for blockchain transactions where applicable  
- app-store subscription handling where applicable  
- fiat values for Art Certificates used for presentation only  
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

The official website also exposes an AI-readable file:

- https://posted.art/llms.txt

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

Official docs page:
- https://posted.art/docs

This repository complements the website by providing a deeper technical and product explanation layer.
