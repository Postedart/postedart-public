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
6. The app prepares payment details server-side where applicable.
7. The user confirms the payment or wallet transaction.
8. The Postcard is finalized and becomes available for sharing during its active hosting period.

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

Posted.art uses secure server-authoritative blockchain handling for payments and NFT creation.

See the FAQ on [how payments are handled](faq.md#how-are-payments-handled), [why Posted.art uses blockchain](faq.md#why-does-postedart-use-blockchain), and [which networks are supported](faq.md#which-networks-are-supported)

This means:
- pricing is server-authoritative and not trusted from the client
- fiat values are used for presentation only
- supported payment assets depend on the selected network or payment flow
- blockchain transaction parameters are prepared server-side
- users confirm authoritative payment or wallet transactions

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
