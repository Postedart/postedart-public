# App flow

This document explains how the Posted.art app works from a user perspective.  
It describes page flow, public access, wallet requirements, and the main actions a user can take inside the app.

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

- **Connect** → connect a wallet and sign an authentication message
- **Content Grid** → browse and open individual content items  
- **Create & Earn** → open the creator submission flow  
- **Wallet** → open the wallet area  
- **Search** → filter the content library  

### Public‑first browsing

Explore is open by default.

Users can:
- browse the content grid  
- open content items  
- filter the content library  

Wallet connection is not required for basic browsing.

### App install prompt (browser access)

When the app is opened in a browser instead of installed mode, an install prompt may be shown.

This prompt:
- may be shown once and can be reopened via the install icon  
- explains how to install the app  

Installed mode and browser mode share the same functionality. Installation improves mobile interaction and performance.

### Connect

A wallet connection is required only for protected actions such as:
- sending a **Postcard**  
- buying an **Art Certificate**  
- using **Create & Earn**  
- liking content  

When wallet‑linked access is required, the user is asked to:
1. connect a supported wallet  
2. sign a wallet authentication message  

This creates a wallet‑authenticated session.

### Content Grid

The Content Grid is the main browsing surface.  
It presents the content library as a scrollable grid of images and videos.

Selecting an item opens the `/card` page.

The grid shows a rotating set of content items from the shared library.  
Users can refresh the grid to load a new content set.

### Create & Earn

The Create & Earn action opens the creator submission flow.

If the user is not connected, wallet connection is required first.  
If connected, the creator submission dialog can open.

### Wallet

The Wallet action opens the wallet‑linked area of the app.  
This is where public browsing transitions into wallet‑based usage.

### Search

The Search action filters the content library.  
Search works during public browsing and remains part of the Explore flow.

---

## Card page (`/card`)

The Card page is the content detail page for an image or video from the shared library.

It allows the user to:
- create a **Postcard**
- like content
- buy an **Art Certificate**

### Main actions

- **Back** → return to Explore  
- **Write Postcard** → open `/write`  
- **Like** → save to wallet‑linked favorites  
- **Share card** → open native share flow  
- **Buy Art Certificate** → start NFT purchase flow  
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
- **Gift** → upload optional gift image  

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
- **Buy** → start Postcard payment flow  
- **Music** → preview attached MP3  
- **Gift** → preview or reminder  

After payment:

- **Share** → share the unique Postcard link  
- **QR code** → open QR and direct link  
- **Close** → end flow and return to Explore  

### Purpose

The Share page confirms the final Postcard experience before payment and sharing.

After payment, the Postcard becomes an active shared item with its own public link.

---

## Wallet page (`/`)

The Wallet page is the personal usage overview.

It combines:
- wallet identity  
- balance  
- created Postcards  
- connected chain  
- Art Certificate holdings  

### Main areas

- **Connect** → wallet authentication  
- **Wallet balance** → funds overview  
- **Your Postcards** → previously created Postcards  
- **Connected chain** → current blockchain network  
- **Art Certificate Grid** → owned Art Certificates and other NFTs
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
- sender wallet identity  
- availability state  
- optional gift  
- optional MP3  

### Identity model

Sender identity may include:
- wallet avatar  
- ENS name if available  
- shortened wallet address  

### Availability

If the Postcard is no longer accessible, the page switches to an expired state.

### Actions

- **Download card** → download rendered message card  
- **Play / pause music** → control MP3 playback  
- **View gift** → preview and download gift attachment  

This page represents the final delivery experience of the Postcards product.
