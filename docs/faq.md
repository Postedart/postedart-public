# FAQ


## Postcards
### What is a Postcard?

A Postcard is a hosted digital composition that includes:

- visual content (image or video)
- a personal message
- an optional short music clip
- an optional gift voucher image

Postcards are designed for mobile viewing and sharing.

### How long does a Postcard stay online?

Hosting depends on the selected product flow.

- Pay-as-you-use Postcards include **5 days** of hosting by default.
- Pay-as-you-use flows can extend hosting to **30 days total** during confirmation.
- Android subscription Postcards include **30 days** of hosting.

Expired or deleted Postcards are removed from active hosting and can no longer be retrieved.

### Can I schedule a Postcard?

Yes, on Android.

Scheduled Postcards are stored locally on the user's phone as drafts. The app sends a notification reminder at the selected date and time.

Scheduling rules:

- the reminder time must be at least **1 hour from now**
- the reminder time can be at most **1 month from now**
- users can store up to **5 scheduled Postcards** at the same time
- scheduled Postcards remain available as drafts after the reminder notification until the user sends or deletes them

When a scheduled Postcard is opened, the user can send it, choose a new reminder time, delete it, or add a gift file. The already prepared Postcard content itself is not edited from that recovery flow.

### What happens when someone receives a Postcard?

Recipients receive a link to a hosted Postcard page.

They can:

- view the visual content
- read the message
- play the optional music
- access the optional gift

No wallet or account is required to view a Postcard.


## Accounts & Access
### Do I need to buy an NFT to send a Postcard?

No.

NFT ownership is optional.

Users can send Postcards using content from the library without owning that content as an NFT.

### Do I need an account?

No.

Posted.art does not use traditional username/password accounts.

Depending on the platform, protected actions may use either wallet authentication or a supported platform account.

When wallet‑linked access is required, the user is asked to:

1. connect a supported wallet
2. sign a wallet authentication message

This creates a wallet‑authenticated session.

- Wallet connection replaces traditional accounts
- Signature authentication replaces traditional username/password login and creates a wallet-authenticated session

On Android, protected Postcard actions use Google account sign-in instead of a wallet.

### When do I need to authenticate?

Authentication is required only for protected app actions, such as:

- sending a **Postcard**
- buying an **Art Certificate**
- using **Create & Earn**
- liking content

Viewing Postcards does not require authentication.

The authentication method depends on the platform. Web/EVM flows use wallet authentication. Android uses Google account sign-in for its Postcard-only app flow.


## Art Certificates
### What are Art Certificates?

Art Certificates are NFTs representing ownership of selected content from the Posted.art content library.

They are optional and exist as a collecting layer separate from Postcard usage.


## Payments & Pricing
### How much does it cost?

Posted.art uses reference pricing for the following product types:

- Postcard: **one Postcard per month is free**
- Pay-as-you-use Postcard with 5 days hosting: **$0.49**
- Pay-as-you-use 30-day hosting extension: **+$0.09**
- Telegram Postcard with 5 days hosting: **49 Stars**
- Telegram 30-day hosting extension: **+9 Stars**
- Android subscription model: **$0.99 per month** for continued Postcard sending with 30-day hosting
- Image Art Certificate (NFT): **$0.99**
- Video Art Certificate (NFT): **$1.99**
- Premium Art Certificates (NFT): price set by the creator

Art Certificate prices are displayed in local fiat currencies based on the user’s region for presentation.  
Payments are executed using the payment asset shown in the selected network or payment flow.

In app-store subscription flows, the store may display and charge the subscription price in the user's local currency according to that store's pricing and billing rules.

### Is there a fair usage limit for Postcards?

Yes.

Android subscription-based Postcard sending is designed as unlimited normal usage, with a fair-usage limit of **20 active Postcards** at the same time.

If a user already has 20 active hosted Postcards, a new Postcard cannot be created until some active Postcards expire or are deleted.

### How are payments handled?

Several payment and entitlement models exist:

- Postcard → one free Postcard per month
- Web/EVM Postcards → pay-as-you-use wallet-based payment flow after the free monthly Postcard
- Solana Postcards → pay-as-you-use Solana payment flow after the free monthly Postcard
- Telegram Postcards → pay-as-you-use Telegram Stars flow after the free monthly Postcard
- Android Postcards → app-store subscription model after the free monthly Postcard
- Future native mobile apps may use a similar subscription model if released
- Art Certificates (NFTs) → executed via smart contracts, paid and minted on-chain

This separation keeps Postcard usage simple while preserving NFT ownership logic.

### Can I extend the lifetime of a Postcard?

This depends on the active platform flow.

Pay-as-you-use Postcards include **5 days** of hosting by default and can extend hosting to **30 days total** during confirmation.

Android subscription Postcards include **30 days** of hosting by default.

### Which products are available on each platform?

Postcards are the shared product across platforms.

Platform availability:

- Web/EVM app: Postcards, Create & Earn, and Art Certificates
- Android app: Postcards only
- Telegram app: Postcards only
- Solana flows: Postcards only

Art Certificates and Create & Earn are EVM/web product layers and are not required for sending Postcards.


## Create & Earn
### What is Create & Earn?

Create & Earn allows creators to submit visual content to the Posted.art platform.

Submitted content is subject to:

- content review
- policy guidelines
- platform approval

Approved content can then be:

- used in Postcards
- sold as NFTs

### What does "subject to review and policy guidelines" mean?

All submitted content is reviewed before being approved for the platform.

This means content must:

- follow applicable laws
- avoid harmful, abusive, or misleading material
- respect copyright and ownership rights
- meet basic quality and usability standards

Content that does not meet these requirements may be rejected or removed.

### How does creator revenue work?

Creator revenue is part of the Create & Earn model.

Primary Art Certificate (NFT) sales:

- Creators receive **90%** of the sale price
- The platform receives **10%**

Secondary sales:

- A default **3% royalty** is configured via ERC‑2981, but recognition of that royalty depends on the relevant marketplace or protocol

These revenue rules are enforced by smart contract logic, subject to the behavior of the relevant resale provider or protocol where applicable.

### Are Art Certificates limited editions?

Art Certificate supply is determined at creation time by the creator or platform.

- Some Art Certificates are **unlimited editions**
- Some Art Certificates have a **fixed maximum supply**

Once defined, supply caps cannot be changed for the related Art Certificate.

### Can Postcards be reshared?

Yes.

Each Postcard has a unique public link that can be reshared during its hosting lifetime.

### Can I edit or delete a Postcard?

Postcards cannot be edited after creation.

They can be deleted from the user's personal Postcards area.

### What happens when a Postcard expires?

The Postcard is deleted from the Cloudflare server and can no longer be retrieved.


## Content & Formats
### Is content AI‑generated?

Most content is AI‑generated, but the platform also supports and actively encourages human‑created content.

### Is Posted.art a social network?

No.

Posted.art is a **visual communication platform with optional digital ownership**, not a traditional social media platform.

### Why does Posted.art use blockchain?

Blockchain is used for secure payments, ownership, and authentication where blockchain flows are part of the selected product experience.

Wallet-based authentication replaces traditional accounts by using signed messages, providing a highly secure way to verify user identity without passwords.

Some platform-specific Postcard flows use non-wallet authentication or payment rails, such as Google account sign-in on Android, Telegram Stars, or app-store subscriptions.

### What file formats and sizes are supported?

#### Image

Image files must be uploaded in **JPG, PNG, WebP, or HEIC** format.

- Maximum upload size: **50 MB**
- Automatically converted to: **WebP format**
- Maximum dimensions after conversion: **1080 × 1920 pixels**

Images are converted for mobile viewing with square-to-portrait framing only. Landscape images are center-cropped to square, portrait images keep their aspect ratio up to 9:16, and images taller than 9:16 are center-cropped to 9:16. Smaller images are not upscaled. Converted images have an approximate maximum file size of **1.2 MB**.

#### Video

Video files must be uploaded in **MP4, MOV, or WebM** format.

- Maximum upload size: **50 MB**
- Automatically converted to: **silent MP4 postcard format**
- Maximum duration after conversion: **10 seconds**
- Maximum dimensions after conversion: **720 × 1280 pixels**

Videos are converted for mobile viewing with square-to-portrait framing only. Landscape videos are center-cropped to square, portrait videos keep their aspect ratio up to 9:16, and videos taller than 9:16 are center-cropped to 9:16. Smaller videos are not upscaled. Converted videos have an approximate maximum file size of **2.75 MB**.

#### Music

Music files must be uploaded in **MP3 or WAV** format.

- Maximum upload size: **20 MB**
- Maximum duration: **10 minutes**
- Automatically converted to: **mono WAV postcard clip**
- Maximum duration after conversion: **10 seconds**

Music is converted and optimized for consistent mobile playback with an approximate maximum file size of **500 KB**.

#### Gift voucher

Gift voucher images must be uploaded in **JPG, PNG, WebP, or HEIC** format.

- Maximum upload size: **40 MB**
- Automatically converted to: **optimized WebP format**

Gift images are converted and optimized for consistent mobile viewing with a maximum file size of **700 KB**.

### Where is Postcard content stored?

Postcard content is stored on Cloudflare for fast, reliable mobile delivery.

### Where is Art Certificate content stored?

Art Certificate content is stored on Arweave for permanent, decentralized storage, ensuring long-term availability independent of the platform.


## Technical & Infrastructure
### Why does my NFT not appear immediately in my wallet grid?

After purchase, NFTs may take up to **24 hours** to appear in the NFT grid.

This delay is caused by external indexing services that process blockchain data.


### Are stickers supported?

The sticker panel is powered by **GIPHY**. Stickers are rendered into the Postcard canvas and processed as part of the final image.

### Which currencies are used across regions?

Posted.art displays Art Certificate prices in local fiat currencies based on the user’s region.

This improves clarity and makes pricing easier to understand across different parts of the world.

Displayed fiat values are mapped by region as follows:

- Africa → USD
- Australia & New Zealand → AUD
- Central & Eastern Europe → EUR
- China → CNY
- Europe → EUR
- India → INR
- Japan & Korea → SGD
- Latin America → USD
- Middle East → USD
- North America → USD

Fiat values are used for presentation only.

### What are the Posted.art wallet addresses?

#### Sales wallets

- EVM: `0x41B94C7f33E4a839325Fd252610fD0531EA822D5`
- Solana: `HxnHCUcLSPWwzbwfahP3eZ1WY1TDR4nQHpRnCqaLHHpA`

### How can I contact Posted.art?

You can contact Posted.art at:

hello@posted.art

### Which networks are supported?

Postcard payment and entitlement flows:

- Ethereum (ETH)
- BNB Chain (BNB)
- Arbitrum (ETH)
- Base (ETH)
- Solana (SOL)
- Telegram (Stars)
- Android (subscription)

Art Certificates (NFTs):

- Ethereum (ETH)
- BNB Chain (BNB)
- Arbitrum (ETH)
- Base (ETH)

### What are the smart contract addresses?

#### ERC-1155 Contract (Art Certificates)

- Ethereum (1): `0x1dbd39235477987e84fc020180b7c955ea9e0329`
- Arbitrum (42161): `0x1dbd39235477987e84fc020180b7c955ea9e0329`
- BNB Chain (56): `0x1dbd39235477987e84fc020180b7c955ea9e0329`
- Base (8453): `0x1dbd39235477987e84fc020180b7c955ea9e0329`

#### Shop Contract (Primary Sales)

- Ethereum (1): `0x399ddef59aed518951b8e3d58234e39b8649ab1f`
- Arbitrum (42161): `0x399ddef59aed518951b8e3d58234e39b8649ab1f`
- BNB Chain (56): `0x399ddef59aed518951b8e3d58234e39b8649ab1f`
- Base (8453): `0x399ddef59aed518951b8e3d58234e39b8649ab1f`
