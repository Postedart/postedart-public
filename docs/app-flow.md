# App flow

This document explains how the Posted.art app works from a user perspective.  
It describes page flow, public access, authentication requirements, and the main actions a user can take inside the app.

Posted.art uses a **public‑first access model**.  
Users can browse the content library without creating an account and without using a traditional login/password system.

The app is structured around three product layers:
- **Postcards**
- **Create & Earn**
- **Art Certificates**

---

## Explore page (`/explore`)

The Explore page is the main public entry point of the app.  
It presents the shared content library as a mobile‑first grid of images and videos.

Users can browse content without connecting a wallet.

### Main actions

- **Connect** → authenticate with the supported method for the active platform
- **Content Grid** → browse and open individual content items  
- **Create & Earn** → open the creator submission flow  
- **Wallet / Postcards** → open the user's personal area  
- **Search** → filter the content library  

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
- platform integrations such as Android, Telegram or Farcaster where available
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
- Android uses Google account sign-in for its Postcard-only flow
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

The grid shows a rotating set of content items from the shared library.  
Users can refresh the grid to load a new content set.

### Create & Earn

The Create & Earn action opens the creator submission flow.

In web/EVM flows, if the user is not connected, wallet connection is required first.  
If connected, the creator submission dialog can open.

### Wallet

The Wallet or Postcards action opens the user's personal area.  
This is where public browsing transitions into authenticated usage.

### Search

The Search action filters the content library.  
Search works during public browsing and remains part of the Explore flow.

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
- **Artist** → filter Explore to the same creator  

### Purpose

The Card page connects public browsing with product actions.

Users decide whether to:
- use the content in a **Postcard**
- engage through likes or sharing
- acquire ownership through an **Art Certificate**

### Additional behavior

The Card page supports vertical browsing between nearby content items.  
This allows continued browsing without returning to Explore.

---

## Write page (`/write`)

The Write page is the **Postcard editor**.  
It allows the user to create the message layer that will be combined with visual content from the shared library.

### Main actions

- **Back** → return to `/card` while preserving Postcard state  
- **Save** → store composition and continue to `/share`  
- **Text Editor** → edit message text and styling  
- **Stickers** → open sticker panel  
- **Background Color** → cycle color options  
- **Music** → upload MP3 and select clip  
- **Gift** → upload optional image of a gift voucher

### Purpose

The Write page is the creative composition layer of the **Postcards** product.

Users define the final message experience delivered with visual content from the shared library.

### Composition model

The page uses a live‑rendered canvas model.  
All elements are combined into one Postcard composition finalized during the Share step.

---

## Share page (`/share`)

The Share page is the final review and confirmation step of the **Postcards** flow.

It displays the complete Postcard composition:
- visual content from the shared library  
- rendered message  
- optional MP3  
- optional gift  

### Main actions

- **Back** → return to `/write`  
- **Send / Share** → open Postcard confirmation flow  
- **Music** → preview attached MP3  
- **Gift** → preview, add or edit  

The confirmation flow can include:

- send the Postcard now
- schedule the Postcard for later where supported
- choose the available hosting option
- check the free monthly allowance
- check subscription state where applicable
- check active Postcard fair-usage limits

After confirmation:

- **Share** → share the unique Postcard link  
- **QR code** → open QR and direct link  
- **Close** → end flow and return to Explore  

### Purpose

The Share page confirms the final Postcard experience before sending, scheduling, payment, or sharing.

After successful confirmation, the Postcard becomes an active shared item with its own public link.

### Scheduling behavior

On supported mobile app flows, the user can schedule a Postcard instead of sending it immediately.

Scheduled Postcards:

- are stored locally on the user's phone
- can be scheduled between **1 hour** and **1 month** from now
- trigger a local notification reminder
- remain visible as drafts after the reminder until sent or deleted
- are limited to **5 scheduled Postcards** at the same time

When a scheduled Postcard is reopened, the user can send it now, choose a new notification time, add a gift file, or delete it. The original Postcard composition is not edited from that recovery state.

---

## Wallet / Postcards page (`/`)

The Wallet or Postcards page is the personal usage overview.

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
- **Art Certificate Grid** → owned Art Certificates and other NFTs where supported
- **Explore shortcut** → return to `/explore`  
- **Info shortcut** → open Posted.art website  

### Art Certificate interactions

Selecting an NFT opens detail view with:

- **Plus** → reuse content associated with a Posted.art **Art Certificate** in `/card`  
- **Delete** → burn Art Certificate if contract supports burn  

---

## Public postcard page (`/postcard/[uid]`)

The Public Postcard page is the external delivery surface of a **Postcard**.

Recipients can view the Postcard without:
- installing the app  
- connecting a wallet  

### Displays

- visual content from the shared library  
- rendered message  
- sender wallet identity or platform-supported sender identity  
- availability state  
- optional gift  
- optional MP3  

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
- **Play / pause music** → control MP3 playback  
- **View gift** → preview and download gift attachment  

This page represents the final delivery experience of the Postcards product.
