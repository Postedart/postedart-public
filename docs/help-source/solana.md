# Solana

Use this guidance whenever the active wallet connection is **Solana**, including inside Farcaster. Available features follow the connected network, rather than the wallet brand or host app alone.

## Connect and identify your wallet

Posted.art's web wallet connection and ownership-signing use **Reown AppKit / WalletConnect**. Follow the connection choices offered in your client and review the wallet's signature request.

See [wallet connection](wallet-connection.md) for desktop and mobile routes. If a request stalls, follow [connection and signing support](wallet-connection.md#wallet-connection-and-signing-support). A failed sign-in request does not mean a payment or Postcard creation has completed.

Account shows your connected Solana wallet information, balance and **Your Postcards**. It can use an **SNS avatar** when one is available for the connected wallet; otherwise a generated geometric avatar is used. See [Account](account.md#personalize-your-sender-photo).

## Browse, write and create

Browse artwork, write a message, add music or a gift, and create a personal Postcard using the common interface. After creation, share the finished link through your chosen messaging app or show its QR code.

Use the shared [Home/search](home-and-series.md), [Card](artwork-view.md), [Write](write.md) and [Share](share.md) instructions. Solana does not use Telegram login, Telegram Stars or the standalone native-app subscription/scheduling flow.

## Pay in SOL

Current reference prices and extension charges are maintained in [the FAQ pricing section](https://github.com/Postedart/postedart-public/blob/main/docs/faq.md#how-much-does-it-cost); checkout shows the amount payable in SOL.

Paid Solana Postcards use **SOL**. Checkout includes five-day hosting by default, with an optional extension to **thirty days total**. Review the SOL amount, extension choice and wallet network fee before authorizing payment.

When your account is eligible for a free Postcard, the free confirmation provides thirty-day hosting without a wallet payment. See [pricing](pricing.md).

If payment completes but the connection is interrupted, reconnect the same wallet promptly and check **Account → Your Postcards**. See [payment recovery](share.md#payment-completed-but-the-connection-was-interrupted) for the three-day recovery window and next steps.

## Why are Upload and Art Certificates missing?

Posted.art's Solana flow hides:

- **Create & Earn**, including the heart-plus Upload control on Home.
- The **Card-page dollar icon** for purchasing an Art Certificate NFT.
- **Your Art Certificate NFTs** on Account.

These Posted.art features require a supported EVM connection. Their absence resembles Telegram's feature availability, but Solana still uses wallet identity and SOL payments. This does not mean Solana is generally unable to support NFTs.

The **Share-page dollar sign** remains available for personal Postcard creation and payment. It is separate from the hidden artwork NFT purchase control.

## Screenshots to use

Reuse matching shared [Home/search](home-and-series.md#screenshot-reuse-across-clients), [Card](artwork-view.md#screenshot-reuse-across-clients), [Write](write.md#screenshot-reuse-across-clients) and [Share](share.md#screenshot-reuse-across-clients) illustrations. Use [free confirmation](screenshots/shared-web-free-postcard-confirmation.png) for an eligible free state and [the finished QR/link panel](screenshots/shared-postcard-ready-qr.png) after creation.

A Solana-specific connected Account, SOL checkout or approval screenshot is not available. Explain those steps in text rather than showing an EVM Account collection, ETH/BNB price, Telegram Stars or MetaMask desktop transaction as a Solana screen. ETH checkout images can explain hosting concepts but do not show a SOL quote.

See [screenshot guidance](screenshot-guidance.md) for client and state selection.
