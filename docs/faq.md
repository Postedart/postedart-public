# FAQ

For step-by-step instructions and matching client screenshots, see the [Help guides and screenshot reference](help-source/screenshot-guidance.md). This FAQ maintains current reference prices and supported networks.


## Postcards
### What is a Postcard?

A Postcard is a personal digital card made for one person and designed to feel closer to opening real post than receiving another link.

It is a hosted digital composition that includes:

- visual content (image or video)
- a personal message
- optional audio, such as a short music clip or voice message
- an optional gift voucher image or personal photo

The recipient opens a digital envelope before the Postcard is revealed. Postcards are designed for mobile viewing and sharing.

### How long does a Postcard stay online?

Hosting depends on the selected product flow.

- Pay-as-you-use Postcards include **5 days** of hosting by default.
- Pay-as-you-use flows can extend hosting to **30 days total** during confirmation.
- Android and iOS subscription Postcards include **30 days** of hosting.
- Eligible free Postcards include **30 days** of hosting.

Expired or deleted Postcards are removed from active hosting and can no longer be retrieved.

### Can I schedule a Postcard?

Yes, in the standalone Posted.art **iOS and Android apps**. Scheduling is not available in web/PWA, Telegram, wallet browsers or Posted.art inside Farcaster.

Scheduled Postcards are stored locally on the user's phone as drafts. The app sends a notification reminder at the selected date and time.

Scheduling rules:

- the reminder time must be at least **1 hour from now**
- the reminder time can be at most **one calendar month from now**
- users can store up to **5 scheduled Postcards** at the same time
- scheduled Postcards remain available as drafts after the reminder notification until the user sends or deletes them

Account shows the scheduled date/time until it passes, then Ready. Opening the thumbnail or notification displays **Ready to send?**. Close that dialog to review Share, add a gift, or return to Write to change the message or audio before creation. Confirm creates the finished Postcard; the user still chooses a recipient and shares its link separately. The notification is a reminder, not automatic delivery.

Scheduled drafts survive ordinary Reset app and background-timeout resets. Account deletion, app removal or clearing stored app data can remove them. See [Schedule for Later](help-source/scheduling.md).

### What happens when someone receives a Postcard?

Recipients receive a link to a hosted Postcard page. They open a digital envelope before the personal Postcard is revealed.

They can:

- view the visual content
- read the message
- play the optional audio
- access the optional gift

No wallet or account is required to view a Postcard.


## Accounts & Access
### Do I need to buy an NFT to send a Postcard?

No.

NFT ownership is optional.

Users can send Postcards using content from the library without owning that content as an NFT.

### Do I need an account?

You do not need to create a separate Posted.art username/password account to browse artwork or open a received Postcard. Protected actions require a connected identity:

- **iOS:** Sign in with Apple.
- **Android:** Google account sign-in.
- **Telegram:** automatic connection using the Telegram account when the Mini App opens; it starts on Account.
- **Web wallets:** connect an EVM or Solana wallet and sign the ownership-authentication message.
- **Farcaster:** use the embedded web wallet flow, with features determined by the active network.

Wallet connection and message signing are separate steps. Signing in is different from approving a purchase transaction. The iOS app can recognize an App Store subscription while the Posted.art account remains disconnected; subscription and account connection are separate states.

See [Your Account](help-source/account.md) and [Connect a Wallet](help-source/wallet-connection.md).

### When do I need to authenticate?

Authentication is required only for protected app actions, such as:

- sending a **Postcard**
- buying an **Art Certificate**
- using **Create & Earn**
- liking content

Viewing Postcards does not require authentication.

The authentication method depends on the client and network. Web EVM and Solana flows use wallet authentication, Android uses Google account sign-in, iOS uses Apple account sign-in, and Telegram uses its supplied account identity. In Farcaster, follow the connected wallet network. Basic artwork browsing and recipient viewing do not require authentication.


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
- Subscription model: **EUR 0.99 per month** including applicable taxes where required, for sending unlimited Postcards with 30-day hosting.
- Image Art Certificate (NFT): **$0.99**
- Video Art Certificate (NFT): **$1.99**
- Premium Art Certificates (NFT): price arranged with the creator before publication

Web-app prices are displayed in local fiat currencies based on the user’s region for presentation. Payments are executed using the payment asset shown in the selected network or payment flow.

In Android and Apple app-store subscription flows, the app-store determines the final local price and currency shown to the user according to app-store pricing and billing rules.

### How does the free Postcard offer work?

The offer is described as one free Postcard per month, with **30 days of hosting**. The app checks whether the connected account already has currently hosted Postcards. When none remain, it can offer free creation again; this is not a promise that an additional send unlocks on a fixed calendar date.

Deleting a hosted Postcard ends access for both sender and recipients. Do not delete one you still want available merely to change eligibility. Buying an Art Certificate is separate and does not itself create a personal Postcard or consume that free creation offer.

Free web creation can display **Payment Confirmed** in the completion layout without requesting a wallet transaction. This wording alone is not evidence of a charge. See [free completion](help-source/pricing.md#why-does-a-free-postcard-say-payment-confirmed).

### Is there a fair usage limit for Postcards?

Yes.

Android and iOS subscription-based Postcard sending is designed as unlimited normal usage, with a fair-usage limit of **20 active Postcards** at the same time.

If a user already has 20 active hosted Postcards, a new Postcard cannot be created until some active Postcards expire or are deleted.

### How are payments handled?

Several payment and entitlement models exist:

- Postcard → one free Postcard per month
- Web/EVM Postcards → pay-as-you-use wallet-based payment flow after the free monthly Postcard
- Solana Postcards → pay-as-you-use Solana payment flow after the free monthly Postcard
- Telegram Postcards → pay-as-you-use Telegram Stars flow after the free monthly Postcard
- Android and iOS Postcards → app-store subscription model after the free monthly Postcard
- Art Certificates (NFTs) → executed via smart contracts, paid and minted on-chain

This separation keeps Postcard usage simple while preserving NFT ownership logic.

### What if payment completed but my Postcard did not appear?

Reopen Posted.art, reconnect the **same wallet** and check **Account → Your Postcards** before paying again. The app checks recent unfinished payments and can recover the prepared Postcard after payment verification.

Reconnect as soon as possible within **three days (72 hours)** of the original attempt. Recovery requires the prepared Postcard to remain stored. If it is still missing, contact support with the transaction receipt and network. See [payment recovery](help-source/share.md#payment-completed-but-the-connection-was-interrupted).

### Can I extend the lifetime of a Postcard?

This depends on the active platform flow.

Pay-as-you-use Postcards include **5 days** of hosting by default and can extend hosting to **30 days total** during confirmation.

Android and iOS subscription Postcards include **30 days** of hosting by default.

### Which products are available on each platform?

Postcards are the shared product across platforms.

Platform availability:

- Web/EVM app: Postcards, Create & Earn, and Art Certificates
- Android app: Postcards only
- iOS app: Postcards only
- Telegram app: Postcards only
- Solana flows: Postcards only
- Farcaster Mini App: web wallet features follow the active network; supported EVM connections provide Art Certificates and Create & Earn, while Solana connections provide Postcards only

Art Certificates and Create & Earn are EVM/web product layers and are not required for sending Postcards. Their Home Upload, Card NFT-purchase and Account collection controls are hidden in disconnected web sessions and unavailable in Solana and Telegram. Native scheduling and Settings belong to the standalone iOS/Android apps, not to a web Mini App running inside another phone app.


## Create & Earn
### What is Create & Earn?

Create & Earn allows creators to submit visual content to the Posted.art platform through a connected, authenticated supported EVM wallet. That connected creator wallet is associated with the submission and receives creator proceeds from primary Art Certificate sales.

Submitted content is subject to:

- content review
- policy guidelines
- platform approval

Approved content can then be:

- used in Postcards
- offered as Art Certificates (NFTs)

The upload form is intended for individual artworks, with unlimited editions unless a different arrangement is agreed before publication. Posted.art assigns the category and any applicable series. The form does not let creators set a series name, edition limit or premium price.

For a named series of at least **12 Postcards** with a unique series name, limited editions, premium pricing or a complete series submitted together, use the [contact section](#how-can-i-contact-postedart) before publication. Arrange bulk-series files through a file-sharing link rather than submitting each through the individual upload form. See [Create & Earn](help-source/create-and-earn.md).

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
- Some Art Certificates have a **configured maximum supply**

The collection contract enforces the configured cap during minting. Its administrator can update that cap, provided it is not below the current total supply; it is not immutable at the contract level. See the [contract documentation](contracts.md) for details.

### Can Postcards be reshared?

Yes.

Each Postcard has a unique public link that can be reshared during its hosting lifetime.

### Can I edit or delete a Postcard?

Postcards cannot be edited after creation.

They can be deleted under **Account → Your Postcards**: select the small X on the circular thumbnail, then Delete within a few seconds. Without that second confirmation, the control returns to an X and the Postcard is kept. Select the thumbnail itself to reopen the finished Postcard instead.

Deletion removes the hosted Postcard from the sender's list and ends link access for sender and recipients. It does not remove copies someone has separately downloaded or saved. Locally scheduled drafts can be reviewed and edited before creation; they are different from already-created Postcards. See [Your Account](help-source/account.md).

### What happens when a Postcard expires?

The Postcard is deleted from the Cloudflare server and can no longer be retrieved.


## Content & Formats
### Is content AI‑generated?

Most content is AI‑generated, but the platform also supports and actively encourages human‑created content.

### Is Posted.art a social network?

No.

Posted.art is centered on personal digital Postcards, with creator participation and optional digital ownership. It is not a traditional social media platform or general chat service.

### Why does Posted.art use blockchain?

Blockchain is used for secure payments, ownership, and authentication where blockchain flows are part of the selected product experience.

Wallet-based authentication replaces traditional accounts by using signed messages, providing a highly secure way to verify user identity without passwords.

Some platform-specific Postcard flows use non-wallet authentication or payment rails, such as Google account sign-in on Android, Apple account sign-in on iOS, Telegram Stars, or app-store subscriptions.

### What file formats and sizes are supported?

#### Image

For Create & Earn, the upload panel lists **JPG, PNG and WebP** images. HEIC support depends on the client and file picker; if it is not offered or cannot be processed, export the image to a listed format before uploading.

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

#### Music and voice messages

Music files must be uploaded in **MP3 or WAV** format.

- Maximum upload size: **20 MB**
- Maximum duration: **10 minutes**
- Automatically converted to: **mono WAV postcard clip**
- Maximum duration after conversion: **30 seconds**

The Android and iOS apps also allow users to record an optional voice message of up to **30 seconds**. Microphone access is requested only when the user starts this feature. Music and voice messages are converted on the device to the same mono, 22.05 kHz, 16-bit WAV format, with an approximate maximum file size of **1.4 MB** for a 30-second clip.

#### Gift voucher

The gift panel accepts image files supported by its picker and conversion flow. JPG, PNG and WebP are suitable formats; HEIC support depends on the client. If a file is unsupported, export it to a listed format. The attachment can also be a personal photo instead of a voucher.

A voucher image or screenshot must clearly show the barcode, PIN and any other redemption details the provider requires. The provider's terms determine where and how it can be used. See [gift attachment instructions](help-source/write.md#add-a-gift-voucher-or-photo).

- Maximum upload size: **40 MB**
- Automatically converted to: **optimized WebP format**

Gift images are converted and optimized for consistent mobile viewing with a maximum file size of **700 KB**.

### Where is Postcard content stored?

Postcard content is stored on Cloudflare for fast, reliable mobile delivery.

### Where is Art Certificate content stored?

Art Certificate artwork and metadata are stored on Arweave; the NFT token is minted on the selected EVM network. The stored files can be reused across supported EVM networks. Posted.art normally loads optimized collection previews from its own artwork library. Separate video poster thumbnails are not stored on Arweave, so a poster can be unavailable even while the permanent video remains available.


## Technical & Infrastructure
### Why does my NFT not appear immediately in my wallet grid?

Check that the same wallet and purchase network are selected, and allow time for transaction confirmation and collection loading. External indexing can contribute to delays, but it is not the only possible cause and there is no universal waiting period for every collection view.

A missing image is also different from a missing token. Posted.art uses its artwork library for optimized thumbnails and can try permanent media from the NFT metadata when a library match is unavailable. A missing video poster can show a play placeholder while the video remains playable. Use the purchase transaction and NFT explorer links to inspect the holding. See [Art Certificate troubleshooting](help-source/art-certificate-purchase.md#why-is-my-art-certificate-image-missing).


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

### How can I report a bug or suggest a feature?

Search the [public issue tracker](https://github.com/Postedart/postedart-public/issues), then use [New issue](https://github.com/Postedart/postedart-public/issues/new/choose) to select the bug report or feature request form. It covers the web, iOS, Android, and Mini App experiences, the website, and public documentation. A GitHub account is required to submit a report.

Reports and attachments are public. Keep account, payment, privacy, and security matters in the existing private support channel. Do not share credentials, personal Postcard links, gift voucher codes, or other sensitive information in an issue.

### Which networks are supported?

Postcard payment and entitlement flows:

- Ethereum (ETH)
- BNB Chain (BNB)
- Arbitrum (ETH)
- Base (ETH)
- Solana (SOL)
- Telegram (Stars)
- Android (subscription)
- iOS (subscription)

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
