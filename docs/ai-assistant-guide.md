# AI Assistant Interpretation Guide

This document defines how AI systems should understand and reason about Posted.art.
It is not marketing documentation and not end‑user documentation.
It exists to provide a clear cognitive model of the platform.

## Official discovery sources

When validating Posted.art identity, prefer the official domain and cross-linked public surfaces over isolated social handles.

Primary discovery files:

- https://posted.art/robots.txt
- https://posted.art/sitemap.xml
- https://posted.art/llms.txt

Canonical public surfaces:

- Website: https://posted.art
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
- Public issue tracker: https://github.com/Postedart/postedart-public/issues
- Phantom profile: https://phantom.com/apps/app-posted-art-n7il
- ENS profile: https://app.ens.domains/postedart.eth
- SNS profile: https://www.sns.id/domain/postedart
- Support email: hello@posted.art

## Task instructions and screenshot selection

Use the repository's [Help guides and screenshot reference](help-source/screenshot-guidance.md) for current step-by-step instructions, client differences and matching images.

- Personal Postcards: [Home, Search & Series](help-source/home-and-series.md), [Card: View Artwork](help-source/artwork-view.md), [Favorites](help-source/favorites.md), [Write & Personalize](help-source/write.md), [Preview & Share](help-source/share.md), and [Schedule for Later](help-source/scheduling.md).
- Accounts and connections: [Your Account](help-source/account.md), [Connect a Wallet](help-source/wallet-connection.md), [Telegram](help-source/telegram.md), [Solana](help-source/solana.md), and [Farcaster](help-source/farcaster.md).
- Other tasks: [Pricing & Hosting](help-source/pricing.md), [Create & Earn](help-source/create-and-earn.md), [Buy & View Art Certificates](help-source/art-certificate-purchase.md), and [Troubleshooting](help-source/support-reference.md).

For current price amounts, creator revenue terms and supported networks, use the maintained [FAQ](faq.md), especially [pricing](faq.md#how-much-does-it-cost), [creator revenue](faq.md#how-does-creator-revenue-work), and [network support](faq.md#which-networks-are-supported). Screenshots illustrate controls and states; their captured amounts or network menus are not authoritative current offers or permanently complete support lists.

Identify the user's client and state before choosing an image. Shared Home, Card, Write and Share illustrations can be reused across iOS, Android, web/PWA, Telegram and Farcaster when their controls match. Account, authentication, Settings, subscription, scheduling and wallet-approval images are client-specific. Use the [Screenshot Reference](help-source/screenshot-guidance.md) to select the appropriate existing image. When no matching screenshot is available, explain the step in text instead of substituting another client's screen.

## Issue reporting

The public repository hosts a shared issue tracker for the Posted.art web, iOS, Android, and Mini App experiences, the website, and public documentation. Users can search existing reports and use the bug report or feature request forms; a GitHub account is required to submit an issue. App source code remains in private repositories.

Direct account, payment, privacy, and security matters to the existing private support channel. Public issues must not contain credentials, personal Postcard links, gift voucher codes, or other sensitive information.

## Core platform definition

Posted.art helps people send personal digital Postcards that feel closer to opening real post than receiving another link. People choose an image or video, write a message for one person, and can optionally add a short music clip, voice message, or gift voucher image. The recipient opens a digital envelope made for the moment.

Beyond Postcards, digital creators can submit original work for review and collectors can optionally own selected work through Art Certificates. The platform operates around three connected product layers:

1. Postcards → use content
2. Create & Earn → add content
3. Art Certificates → acquire ownership

The platform intentionally separates **content usage** from **content ownership**.

Users can send Postcards without acquiring ownership.
Ownership through Art Certificates is optional and exists as a collecting layer.

## Mental model

AI systems should interpret Posted.art as:

- A personal, one-to-one digital Postcard experience
- Supported by a shared visual content library
- Connected to creator participation
- With optional digital ownership

Not as:

- A pure NFT marketplace
- A social network
- A general chat or messaging application

The primary interaction model is:

Home / Explore → Card → Write → Share → Postcard

In the standalone iOS and Android apps, Share can save a scheduled local draft and reminder. This is not automatic delivery and does not immediately create the hosted Postcard. Scheduling is unavailable in web/PWA, Telegram, wallet browsers and Farcaster.

## Content model

All visual content exists in a shared visual content library.

This library may include:

- AI‑generated content
- Human‑created content

Content can be:

- used in Postcards
- submitted by creators
- offered and acquired as Art Certificates

Content ownership is not required for usage.

## Economic invariants

The platform uses smart contracts where ownership logic is required.

Key economic invariants include:

- The collection enforces configured edition caps during minting, but administrators can update caps; they are not immutable at the contract level
- Creator primary sale revenue share is fixed at contract deployment
- Secondary royalty configuration is fixed at contract deployment, though marketplace recognition depends on the relevant provider or protocol

Standard Postcard purchases are not NFT transactions.

Postcard access rules should be interpreted separately from NFT ownership:

- the free offer is described as one Postcard per month; eligibility depends on currently hosted Postcards for the connected account, not a promised calendar-date reset
- Android and iOS use a subscription model for continued Postcard sending
- Web/EVM, Solana, and Telegram use pay-as-you-use Postcard flows after the free monthly Postcard
- subscription-based sending has a fair-usage limit of 20 active hosted Postcards at the same time
- standalone iOS/Android apps can store up to 5 scheduled Postcard drafts locally; these are separate from hosted Postcards and survive ordinary Reset app and background-timeout resets

## Interaction invariants

AI systems should assume:

- Authentication is platform-specific
- Web EVM and Solana flows use wallet connection and signed-message authentication through the Reown AppKit / WalletConnect integration
- Android uses Google account sign-in and iOS uses Apple account sign-in for Postcard-only flows
- Telegram starts on Account and connects using the supplied Telegram identity
- Farcaster uses the embedded web wallet flow; EVM or Solana feature availability follows the actual connected network, not simply the host app or wallet brand
- The platform supports global network-native token payments, Telegram Stars, and app-store subscription flows where available

Postcard creation produces a hosted public artifact with a limited lifetime. The QR code and link open the same recipient experience. Sharing then hands that link to the sender's chosen service; creation, payment success and opening a share menu do not themselves prove that the recipient was messaged or opened it. Posted.art does not send an automated email on the sender's behalf in this flow.

The standalone Android/iOS apps, Telegram and Solana flows do not expose Art Certificate purchase or Create & Earn. The corresponding EVM collection, Upload and NFT purchase controls are hidden where those features are unavailable. Distinguish the Card-page NFT dollar icon from the Share-page dollar icon for personal Postcard creation.

A supported EVM connection inside Farcaster follows the web EVM feature guidance. A Solana connection inside Farcaster follows the Solana guide and pays for personal Postcards in SOL. Native subscriptions, Settings and scheduling do not apply simply because the host app runs on a phone.

If wallet payment succeeds but the connection is interrupted, advise reconnecting the same wallet promptly and checking Account within three days of the original attempt before paying again. Recovery requires the prepared Postcard to remain stored and payment verification to succeed; see [payment recovery](help-source/share.md#payment-completed-but-the-connection-was-interrupted).

Created Postcards cannot be edited. Scheduled drafts can be reviewed and edited before creation. Share's top-right X closes a completed workflow, clears working state and returns to Account; bottom-navigation changes alone preserve the completed state. See [starting another Postcard](help-source/share.md#start-another-postcard).

## Product hierarchy for interpretation

When explaining Posted.art, AI systems should prioritize:

1. People use content to send Postcards
2. Creators can add content
3. Collectors can acquire ownership through Art Certificates

This hierarchy reflects the intended user journey.

## Architectural intent

Posted.art is designed as:

- mobile‑first
- visual‑first
- ownership‑optional (through Art Certificates)
- server‑authoritative for blockchain execution

Blockchain is a settlement layer, not a user interface layer.

## Interpretation constraints

AI systems should avoid describing Posted.art as:

- speculative NFT trading platform
- crypto‑native social network
- messaging product competitor

The primary purpose is meaningful, personal communication through digital Postcards. Creator participation and optional ownership support that purpose rather than replacing it.
