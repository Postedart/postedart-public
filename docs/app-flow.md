# App flow

This document explains how the Posted.art app works from a user perspective.  
It describes page flow, public access, authentication requirements, and the main actions a user can take inside the app.

The main journey is personal: choose visual content, write a message for one person, and share a digital Postcard that the recipient opens through a digital envelope.

For detailed instructions and matching screenshots, see [Help Source](help-source/screenshot-guidance.md). The Help guides provide the current client-specific steps.

The route paths below describe the web app. Native apps use corresponding screens, and available actions depend on the platform; Create & Earn and Art Certificate purchases belong to the web/EVM experience.

Posted.art uses a **public‑first access model**.  
Users can browse the content library without creating an account and without using a traditional login/password system.

The app is structured around three product layers:
- **Postcards**
- **Create & Earn**
- **Art Certificates**

---

## Home / Explore page (`/explore`)

Home is the main artwork-browsing surface, served at `/explore` in the web app. It presents a mobile-first grid of images and videos. Telegram instead starts on Account with automatic connection; users then select Home to browse.

Users can browse content without connecting a wallet.

### Main actions

- **Connect** → authenticate with the supported method for the active platform
- **Content Grid** → browse and open individual content items  
- **Create & Earn** → open the creator submission flow when a supported authenticated EVM connection enables the Upload control
- **Account** → open the user's identity, Postcards and applicable wallet features
- **Search** → filter the loaded Home selection; special views such as Favorites have their own retrieval behaviour

### Public‑first browsing

Explore is open by default.

Users can:
- browse the content grid  
- open content items  
- filter the content library  

Authentication is not required for basic browsing.

### App Launcher

When a user enters from a mobile browser or website context, Posted.art may show the App Launcher when using the Connect button.

The App Launcher helps the user choose the best environment for using Posted.art.

It can offer:

- wallet app shortcuts, such as MetaMask or Phantom
- WalletConnect as a broader wallet selection path
- native app options for iOS and Android
- platform integrations such as Telegram or Farcaster where available
- a browser continuation option for users who do not want to open another app

The App Launcher exists because mobile wallet connection behavior depends heavily on the host app and operating system. Opening Posted.art inside a wallet or supported platform app can provide a more reliable flow than trying to connect an external wallet from a normal mobile browser.

### Connect

Authentication is required only for protected actions such as:
- sending a **Postcard**  
- buying an **Art Certificate**  
- using **Create & Earn**  
- liking content  

The authentication method depends on the active platform:

- Web/EVM flows use wallet connection and signed messages
- Android uses Google account sign-in and iOS uses Apple account sign-in for Postcard-only flows
- other platform-specific flows may use the identity model provided by that platform

When wallet-linked access is required, the user is asked to:
1. connect a supported wallet  
2. sign a wallet authentication message  

This creates a wallet‑authenticated session.

Postcard-only app experiences may not expose Create & Earn or Art Certificate actions.

### Content Grid

The Content Grid is the main browsing surface.  
It presents the content library as a scrollable grid of images and videos.

Selecting an item opens the `/card` page.

Ordinary Home browsing loads a selection of up to 600 artworks. Refresh loads a new selection while keeping active filters applied; selections may overlap. Opening matching artwork on Card allows browsing its full series, beyond the current Home selection. See [Home, Search & Series](help-source/home-and-series.md).

### Create & Earn

The heart-plus Upload control opens Create & Earn in the web/EVM flow. It is hidden in disconnected web sessions and unavailable in standalone iOS/Android apps, Telegram and Solana. Connect and authenticate a supported EVM wallet to access it; inside Farcaster, the active network determines availability. See [Create & Earn](help-source/create-and-earn.md).

### Account

The Account action opens the user's personal area.
This is where public browsing transitions into authenticated usage.

### Search

Standard Search filters the loaded Home selection and works without authentication. Favorites, Limited Editions and creator results have their own retrieval behaviour. See [Home search](help-source/home-and-series.md#search-and-filter-the-current-selection).

---

## Card page (`/card`)

The Card page is the content detail page for an image or video from the shared library.

It allows the user to:
- create a **Postcard**
- like content
- buy an **Art Certificate** where the active platform supports EVM ownership flows

### Main actions

- **Back** → return to Explore  
- **Write Postcard** → open `/write`  
- **Like** → save to authenticated favorites  
- **Share card** → open native share flow  
- **Buy Art Certificate** → start NFT purchase flow where supported  
- **Creator information** → filter Home to that creator in the web app; the iOS creator logo instead opens an Art Certificate explanation

### Purpose

The Card page connects public browsing with product actions.

Users decide whether to:
- use the content in a **Postcard**
- engage through likes or sharing
- acquire ownership through an **Art Certificate**

### Additional behavior

Card can browse the full series independently of the current Home selection. Opening an owned Art Certificate through its plus action uses single-artwork mode instead. The NFT purchase icon is hidden in disconnected web sessions and unavailable in native apps, Telegram and Solana. See [Card: View Artwork](help-source/artwork-view.md).

---

## Write page (`/write`)

The Write page is the **Postcard editor**.  
It allows the user to create the message layer that will be combined with visual content from the shared library.

### Main actions

- **Back** → return to `/card` while preserving Postcard state  
- **Continue to Share** → prepare the current composition for review at `/share`; this is not a durable draft-save action
- **Text Editor** → edit message text and styling  
- **Stickers** → open sticker panel  
- **Background Color** → cycle color options  
- **Music** → upload audio and select a short clip, or use the voice-recording option where available; see [Write & Personalize](help-source/write.md#record-a-voice-message)
- **Gift** → attach an optional gift-voucher image or personal photo

### Purpose

The Write page is the creative composition layer of the **Postcards** product.

Users define the final message experience delivered with visual content from the shared library.

### Composition model

The page uses a live‑rendered canvas model.  
The canvas is rendered for review during the Share step. The current design is temporary working state, not a durable saved draft. Returning after more than one hour in the background resets working state; native scheduling stores prepared drafts separately. See [saving an unfinished Postcard](help-source/write.md#can-i-save-an-unfinished-postcard).

---

## Share page (`/share`)

The Share page is the final review and confirmation step of the **Postcards** flow.

It displays the complete Postcard composition:
- visual content from the shared library  
- rendered message  
- optional audio, such as a short music clip or voice message
- optional gift voucher image

### Main actions

- **Back** → return to `/write`  
- **Dollar sign / top-right chevron** → open the same personal Postcard confirmation or payment flow
- **Music** → preview the attached audio
- **Gift** → review, add or replace the gift image before creation; the plus badge indicates no attachment

The confirmation flow can include:

- send the Postcard now
- schedule the Postcard for later where supported
- choose the available hosting option
- check the free monthly allowance
- check subscription state where applicable
- check active Postcard fair-usage limits

After successful creation:

- **Share** → open sharing options for the unique Postcard link; the user chooses a recipient and completes sending
- **QR code** → reopen the QR and direct-link panel
- **Gift** → view an attached gift read-only
- **Close / top-right X** → clear the working design and return to Account

Switching bottom-navigation tabs alone preserves the completed Share state. In the web flow, choosing artwork on Home clears that state while retaining the current canvas and attachments. See [starting another Postcard](help-source/share.md#start-another-postcard).

### Purpose

The Share page confirms the final Postcard experience before sending, scheduling, payment, or sharing.

After successful creation, the Postcard has a public link. Scheduling instead saves a local draft and reminder; it does not immediately create the hosted item or send a message. Creating a Postcard and delivering its link are separate actions.

Wallet flows prepare the Postcard before requesting payment. If payment succeeds but the connection is interrupted, reconnect the same wallet promptly and check Account within three days of the original attempt. See [payment recovery](help-source/share.md#payment-completed-but-the-connection-was-interrupted).

The free offer depends on currently hosted Postcards for the connected account; see [eligibility](help-source/pricing.md#free-postcard). Current charges are maintained in [FAQ pricing](faq.md#how-much-does-it-cost).

### Scheduling behavior

Scheduling is available only in the standalone iOS and Android apps, not in web/PWA, Telegram, wallet browsers or Farcaster. It saves a draft and provides a reminder rather than automatic delivery.

Scheduled Postcards:

- are stored locally on the user's phone
- can be scheduled between **1 hour** and **one calendar month** from now
- trigger a local notification reminder
- remain visible as drafts after the reminder until sent or deleted
- are limited to **5 scheduled Postcards** at the same time

Account shows the future date/time, then Ready once that time passes. Opening an item or its notification displays Ready to send. Close that dialog to review Share or return to Write to edit the message or audio and add a gift before creation. Confirm creates the finished hosted Postcard; the user still shares its link separately. Scheduled drafts survive ordinary Reset app and background-timeout resets but can be lost through account deletion or removal of app data. See [Schedule for Later](help-source/scheduling.md).

---

## Account page (`/`)

Account is the personal usage overview. Telegram opens its corresponding Account at `/telegram` and connects automatically.

It combines:
- authenticated identity  
- balance where wallet flows are active  
- created Postcards  
- connected chain where wallet flows are active  
- Art Certificate holdings where EVM ownership flows are active
- scheduled Postcards where supported

### Main areas

- **Connect** → platform-supported authentication  
- **Wallet balance** → funds overview where applicable  
- **Your Postcards** → previously created Postcards  
- **Scheduled Postcards** → local scheduled Postcard drafts where supported
- **Connected chain** → current blockchain network where applicable  
- **Your Art Certificate NFTs** → owned Art Certificates for a supported EVM connection; hidden for Solana and Telegram
- **Explore shortcut** → return to `/explore`  
- **Info shortcut** → open the Posted.art website's Docs section

### Art Certificate interactions

Selecting an NFT opens detail view with:

- **Plus** → open the matching library artwork on Card in single-artwork mode
- **Bin / Delete NFT** → open burn confirmation when the contract supports it; completing the irreversible burn requires a wallet transaction

Unavailable controls are muted with a ban badge. Library matching for plus and burn support for the bin are separate checks. See [owned Art Certificate controls](help-source/art-certificate-purchase.md#open-an-owned-art-certificate).

---

## Public postcard page (`/postcard/[uid]`)

The Public Postcard page is the external delivery surface of a **Postcard**.

Recipients can view the Postcard without:
- installing the app  
- connecting a wallet  

### Delivery experience

The recipient first sees a digital envelope against a sky that changes with the time of day. Opening the envelope reveals the visual content and the personal message, together with any optional music, voice message, or gift voucher image.

### Displays

- visual content from the shared library  
- rendered message  
- sender wallet identity or platform-supported sender identity  
- availability state  
- optional gift voucher image
- optional audio, such as a short music clip or voice message

### Identity model

Sender identity may include:
- wallet avatar  
- ENS name if available  
- shortened wallet address  
- platform-supported sender identity where wallet identity is not used

### Availability

If the Postcard is no longer accessible, the page switches to an expired state.

### Actions

- **Download card** → download rendered message card  
- **Play / pause audio** → control audio playback
- **View gift** → preview and download the gift voucher image

This page represents the final delivery experience of the Postcards product.
