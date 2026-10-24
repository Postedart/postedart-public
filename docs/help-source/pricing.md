# Pricing & Hosting

Creating a personal Postcard is separate from buying an optional **Art Certificate NFT**. The payment method and hosting options depend on the client you use.

For current subscription, wallet, Telegram Stars and Art Certificate reference prices, see [FAQ — How much does it cost?](https://github.com/Postedart/postedart-public/blob/main/docs/faq.md#how-much-does-it-cost). The FAQ is the maintained pricing reference; this guide explains the steps without duplicating price amounts. Review the final amount in the current checkout or app-store confirmation. Screenshot prices are illustrative and may be outdated.

## Native Apple and Android apps

The standalone iOS and Android apps use subscriptions billed through the **Apple App Store** or **Google Play**. The store determines the final local price and currency and handles applicable VAT or other taxes. Review the amount in the store's purchase confirmation; do not add VAT to that final amount again.

Each created Postcard includes **30 days of hosting**. Normal subscription sending is subject to a fair-usage limit of **20 active hosted Postcards at once**. At the limit, delete an existing Postcard or wait for expiry before creating another. Deletion ends access through its link for you and recipients.

The separate limit of **five scheduled drafts** concerns local storage on the device, rather than five extra hosted Postcards. See [scheduling](scheduling.md) and [Account](account.md).

[View an Android subscription offer](screenshots/android-subscribe-offer-redacted.png). Its displayed price is an example for that store account, not a universal price for every region or iOS. For iOS pricing, follow the written store-price guidance rather than using the Android image as an Apple offer.

## Web wallet and Telegram payments

Web wallets and Telegram use pay-as-you-use payments rather than standalone native-app subscriptions. See [the FAQ pricing section](https://github.com/Postedart/postedart-public/blob/main/docs/faq.md#how-much-does-it-cost) for current base prices and extension charges.

| Purchase flow | Payment unit | Hosting option |
| --- | --- | --- |
| Web EVM wallet | ETH or BNB, according to the network | Five days, optionally extended to thirty days total |
| Solana wallet | SOL | Five days, optionally extended to thirty days total |
| Telegram | Stars | Five days, optionally extended to thirty days total |

The extension gives **30 days total**, not thirty additional days. Selecting it adds the current extension charge and updates the checkout total. Stars are not cents; Telegram handles their purchase value and billing.

Web checkout shows the local-currency reference where available and the actual wallet payment amount. **Ethereum, Base and Arbitrum payments use ETH**, **BNB Chain uses BNB**, and **Solana uses SOL**. Inside Farcaster, follow the payment method for the active wallet network.

Review the current checkout total rather than treating a reference price or screenshot conversion as a fixed token amount. Wallet network fees are shown separately by the wallet where applicable.

Screenshots: [web five-day checkout](screenshots/web-wallet-postcard-five-days.png), [web thirty-day option](screenshots/web-wallet-postcard-thirty-days.png), [Telegram five-day checkout](screenshots/telegram-stars-five-days.png), and [Telegram thirty-day option](screenshots/telegram-stars-thirty-days.png). The web screenshots show an ETH example; they are not SOL checkout screenshots.

## Wallet prices

Standard Art Certificate and Postcard delivery/hosting token prices are refreshed approximately every **fifteen minutes**. This does not mean an already-open checkout continuously refreshes. Review the final amount and any network fee in the wallet before approving payment.

Premium Art Certificates have their own artwork price, converted when preparing the purchase. **Premium pricing does not affect personal Postcard sending fees.** See [Art Certificate purchasing](art-certificate-purchase.md).

## Free Postcard

Posted.art offers **one free Postcard per month**, with **30 days of hosting**. The app displays the free confirmation when your connected account is eligible.

Eligibility depends on currently hosted Postcards for that account. If none remain hosted, the app can offer a free Postcard again; this is not a promise that an additional free send unlocks on a particular calendar date. Deleting an existing Postcard ends recipient access, so do not delete a Postcard that you still want available merely to change eligibility.

A free Postcard does not require a wallet payment transaction. Buying an Art Certificate is a separate purchase and does not itself create a personal Postcard or consume that free creation offer.

[View the shared free-Postcard confirmation](screenshots/shared-web-free-postcard-confirmation.png). Use it for the matching eligible web EVM, Solana or Telegram state, including applicable wallet flows inside Farcaster. Native send/schedule controls are separate.

### Why does a free Postcard say Payment Confirmed?

Free web creation reuses the completion layout. **Postcard Prepared**, **Payment Confirmed** and **Postcard Ready — Get Posted!** can all show Done even though no wallet charge was requested. That label alone is not evidence of a payment.

[View the free completion screen](screenshots/web-free-postcard-created-status.png). It has no wallet payment receipt link. Select **OK** to continue to the finished Postcard's sharing controls.

## Paid completion and receipts

After an actual wallet payment, the result includes **View payment receipt**, linking to the transaction on the payment network's explorer.

[View paid Postcard completion with its receipt link](screenshots/web-paid-postcard-success-receipt.png). This is separate from an Art Certificate purchase result, which also provides an NFT-view link.

If the connection was interrupted after payment, reconnect the same wallet promptly and check **Account → Your Postcards** before paying again. See [payment recovery](share.md#payment-completed-but-the-connection-was-interrupted).

## Choose the matching payment instructions

Use the app store's flow for standalone iOS/Android subscriptions, Stars for Telegram, and the connected network's wallet payment for web/PWA or Farcaster. A phone running Farcaster or a wallet browser is still using Posted.art's embedded web flow, rather than the standalone native subscription model.

See [screenshot guidance](screenshot-guidance.md) to select the matching client and payment state. If a client-specific approval image is unavailable, use written instructions rather than substituting another wallet or store's screen.
