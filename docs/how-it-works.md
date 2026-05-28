# How it works

Posted.art is built around three connected products:
- Postcards
- Create & Earn
- Art Certificates

All three products use the same shared visual content library, but support different forms of participation.

---

## 1. Postcards

The Postcards product allows users to create and send a digital Postcard without owning the underlying content as an NFT. See the FAQ on [what a Postcard is](faq.md#what-is-a-postcard) for the full definition.

A Postcard can include:
- visual content (image or short video)
- a personal message
- an optional short MP3 clip
- an optional gift attachment

### Basic Postcard flow

1. The user selects visual content from the Posted.art library.
2. The user opens the Postcard editor.
3. The user adds a personal message.
4. The user may optionally add stickers, a short MP3 clip, or a gift attachment.
5. The user reviews the Postcard composition.
6. The user chooses to send the Postcard now or, where supported, schedule it for later.
7. The app checks the free monthly allowance, subscription state, fair-usage limits, and payment requirements where applicable.
8. The user confirms the Postcard action.
9. The Postcard is finalized and becomes available for sharing during its active hosting period, or stored locally as a scheduled draft where scheduling is supported.

### Postcard access and pricing model

Posted.art is designed around a simple Postcard proposition:

- each user can send **one Postcard per month for free**
- after the free allowance, the active platform flow determines the next step
- Android uses a subscription model for continued Postcard sending
- Web/EVM, Solana, and Telegram use pay-as-you-use Postcard flows
- subscription-based sending has a fair-usage limit of **20 active Postcards** at the same time

Platform billing, currency display, and confirmation mechanics can differ by environment. For current pricing details, see the FAQ.

### Scheduled Postcards

Supported mobile app flows can schedule Postcards.

In that model:

1. the prepared Postcard draft is stored locally on the user's phone
2. the user chooses a reminder time between **1 hour** and **1 month** from now
3. the app schedules a local notification
4. the scheduled draft appears in the user's Postcards area
5. when opened from the notification or Postcards area, the user can send it, choose a new reminder time, add a gift file, delete it, or leave it as a draft

To keep device storage lightweight, the app limits scheduled drafts to **5 scheduled Postcards** at the same time.

### Important Postcard rule

Sending a Postcard does **not** require ownership of the underlying content as an NFT.

See also: [Do I need to buy an NFT to send a Postcard?](faq.md#do-i-need-to-buy-an-nft-to-send-a-postcard) and [How long does a Postcard stay online?](faq.md#how-long-does-a-postcard-stay-online)

This reflects a core Posted.art principle:
- **Postcards** enable content usage and social expression  
- **Art Certificates** enable optional ownership and collecting  

---

## 2. Create & Earn

Create & Earn is the creator-side product. The FAQ entry on [what Create & Earn is](faq.md#what-is-create--earn) provides the short-form explanation.

It enables creators to submit content to the Posted.art content library, subject to review and policy guidelines.

For more detail, see [What does "subject to review and policy guidelines" mean?](faq.md#what-does-subject-to-review-and-policy-guidelines-mean), [How does creator revenue work?](faq.md#how-does-creator-revenue-work), and [What file formats and sizes are supported?](faq.md#what-file-formats-and-sizes-are-supported)

### Basic Create & Earn flow

1. A creator prepares content and related metadata.
2. The content is submitted for review.
3. Posted.art evaluates the submission against product and policy requirements.
4. Approved content is added to the content library.
5. Approved content becomes available for Postcards usage and can be purchased as Art Certificates.

Create & Earn is separate from standard consumer postcard usage.

Create & Earn introduces a direct creator revenue model aligned with ownership outcomes rather than advertising-based attention models.

Create & Earn is part of the web/EVM product layer. It is not part of Postcard-only app experiences such as Android, Telegram, or Solana network flows.

---

## 3. Art Certificates

Art Certificates are the ownership layer of Posted.art. See [What are Art Certificates?](faq.md#what-are-art-certificates) for the matching FAQ definition.

They allow users to purchase images and videos from the same shared content library as NFTs. Art Certificates currently support the EVM networks listed in [Which networks are supported?](faq.md#which-networks-are-supported)

### Basic Art Certificate flow

1. A user browses the Posted.art content library.
2. The user selects content for NFT purchase.
3. The app presents the NFT purchase flow.
4. Pricing and transaction data are prepared server-side.
5. The user confirms the wallet transaction.
6. The NFT is minted and appears in the user’s wallet.

Ownership through Art Certificates is optional and independent from Postcards usage.
Users can participate socially without acquiring ownership.

Art Certificates are part of the EVM ownership layer and are not required or exposed in Postcard-only app experiences.

Related FAQ entries: [Are Art Certificates limited editions?](faq.md#are-art-certificates-limited-editions), [Where is Art Certificate content stored?](faq.md#where-is-art-certificate-content-stored), and [Why does my NFT not appear immediately in my wallet grid?](faq.md#why-does-my-nft-not-appear-immediately-in-my-wallet-grid)

---

## 4. Shared content library

A central idea behind Posted.art is that one content library supports multiple user actions.

The same image or video can be:
- viewed in the content library
- used in a Postcard
- added by a creator through Create & Earn
- purchased as an Art Certificate NFT

Posted.art therefore separates:
- **content usage (Postcards)**
- **content creation (Create & Earn)**
- **content ownership (Art Certificates)**

This separation is fundamental to the product model.

---

## 5. Mobile-first design

Posted.art is designed as a mobile-first platform.

The content library is primarily composed of portrait-oriented visuals optimized for mobile viewing and sharing, consistent with the FAQ note that [Postcards are designed for mobile viewing and sharing](faq.md#what-is-a-postcard).

This influences:
- content presentation
- Postcard composition
- sharing behavior
- overall interface structure

---

## 6. Blockchain handling

Posted.art uses secure server-authoritative handling for pricing, payment preparation, subscriptions, and NFT creation where applicable.

See the FAQ on [how payments are handled](faq.md#how-are-payments-handled), [why Posted.art uses blockchain](faq.md#why-does-postedart-use-blockchain), and [which networks are supported](faq.md#which-networks-are-supported)

This means:
- pricing is server-authoritative and not trusted from the client
- fiat values are used for presentation only
- supported payment assets or subscription options depend on the selected platform flow
- blockchain transaction parameters are prepared server-side where blockchain is used
- app-store subscription state is treated as a platform-specific entitlement where applicable
- users confirm the authoritative payment, subscription, or wallet transaction required by the selected flow

This approach increases control and reduces risk in payment and NFT minting flows.

---

## 7. Product hierarchy

Posted.art is publicly communicated through the following product hierarchy:

1. People use content to send Postcards  
2. Creators add content through Create & Earn  
3. Collectors acquire ownership through Art Certificates

This hierarchy reflects the intended product understanding.

Postcards are the primary user-facing use case.  
Create & Earn is the creator submission layer.  
Art Certificates represent the collecting and ownership layer.
