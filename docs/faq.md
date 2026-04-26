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

Standard Postcards are hosted for **5 days**.

Users can extend hosting to **30 days** by paying an additional fee during the purchase flow.

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

Posted.art does not use traditional accounts.

When wallet‑linked access is required, the user is asked to:

1. connect a supported wallet
2. sign a wallet authentication message

This creates a wallet‑authenticated session.

- Wallet connection replaces traditional accounts
- Signature authentication replaces traditional username/password login and creates a wallet-authenticated session

### When do I need to connect a wallet?

A wallet connection is required only for using the app, such as:

- sending a **Postcard**
- buying an **Art Certificate**
- using **Create & Earn**
- liking content

Viewing Postcards does not require a wallet.


## Art Certificates
### What are Art Certificates?

Art Certificates are NFTs representing ownership of selected content from the Posted.art content library.

They are optional and exist as a collecting layer separate from Postcard usage.


## Payments & Pricing
### How much does it cost?

Posted.art uses reference pricing for the following product types:

- Postcard (5 days hosting included): **$0.49**
- Extend Postcard hosting to 30 days: **+$0.10**
- Image Art Certificate (NFT): **$0.99**
- Video Art Certificate (NFT): **$1.99**
- Premium Art Certificates (NFT): price set by the creator

Prices are displayed in local fiat currencies based on the user’s region for presentation.  
Payments are executed using the payment asset shown in the selected network or payment flow.

### How are payments handled?

Two different payment models exist:

- Postcard → paid via blockchain, with off-chain Postcard creation
- Art Certificates (NFTs) → executed via smart contracts, paid and minted on-chain

This separation keeps Postcard usage simple while preserving NFT ownership logic.

### Can I extend the lifetime of a Postcard?

Yes.

- Standard hosting duration: **5 days**
- Optional extension: up to **30 days total**

The extension can be purchased during the Postcard creation flow.


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

They can be deleted from the wallet page.

### What happens when a Postcard expires?

The Postcard is deleted from the Cloudflare server and can no longer be retrieved.


## Content & Formats
### Is content AI‑generated?

Most content is AI‑generated, but the platform also supports and actively encourages human‑created content.

### Is Posted.art a social network?

No.

Posted.art is a **visual communication platform with optional digital ownership**, not a traditional social media platform.

### Why does Posted.art use blockchain?

Blockchain is used for secure payments, ownership, and authentication.

Wallet-based authentication replaces traditional accounts by using signed messages, providing a highly secure way to verify user identity without passwords.

### What file formats and sizes are supported?

#### Image

Image files must be uploaded in **JPG, PNG, WebP, or HEIC** format.

- Maximum upload size: **20 MB**
- Automatically converted to: **WebP format**
- Maximum width: **1042 pixels**

Images are converted for portrait mobile viewing with a maximum file size of **700 KB**.

#### Video

Video files must be uploaded in **MP4, MOV, or WebM** format.

- Maximum upload size: **20 MB**
- Automatically converted to: **silent MP4 postcard format**
- Maximum duration after conversion: **5 seconds**

Videos are converted for portrait mobile viewing with a maximum file size of **1.3 MB**.

#### Music

Music files must be uploaded in **MP3 or WAV** format.

- Maximum upload size: **20 MB**
- Maximum duration: **10 minutes**
- Automatically converted to: **stereo WAV postcard clip**
- Maximum duration after conversion: **10 seconds**

Music is converted and optimized for consistent mobile playback with a maximum file size of **2 MB**.

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

Posted.art displays prices in local fiat currencies based on the user’s region.

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

Postcard payments:

- Ethereum (ETH)
- BNB Chain (BNB)
- Arbitrum (ETH)
- Base (ETH)
- Solana (SOL)
- Telegram (Stars)

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
