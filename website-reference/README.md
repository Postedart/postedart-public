# Posted.art Website Reference

This folder contains a small source snapshot of the public website's homepage composition, synchronized from the website repository on 2026-10-03.

It helps developers and reviewers understand the website's entry points, localization, storytelling, product sections, and public navigation. For product behavior and user guidance, start with the [main documentation](../README.md#documentation-index).

## Included files

- `page.tsx`: the root homepage entry. Detects the preferred language, redirects non-English visitors to a localized homepage, derives regional context from request headers, builds English metadata, and requests the latest published news.
- `LocalizedPage.tsx`: the source of `src/app/[language]/page.tsx`, renamed here for clarity. Validates the language route, builds localized metadata, derives regional context, and requests localized news. The English route redirects to `/`.
- `PageClient.tsx`: composes the regional story slideshow, Explore, Write, Gift, and Earn sections, news and founder links, and shared footer.
- `Header.tsx`: branding and the link to the App's Explore page.
- `Footer.tsx`: shared branding, app-store and social links, and Docs, Terms, and Privacy navigation.

## Snapshot boundaries

This is not a standalone runnable project. Imports retain their original website paths, and the snapshot omits the Next.js project configuration, dependencies, styling setup, translations, media, metadata helpers, and backend implementations. Calls to the news service show where data enters the homepage; the service implementation and credentials are not included.

News article pages, the founder page, documentation pages, legal page rendering, and the recipient Postcard experience are also outside this small homepage snapshot.

The website source remains the source of truth. These copies should be refreshed together when relevant homepage changes are made, with the synchronization date updated. This folder does not automatically track production.

## Related references

- [Product documentation](../README.md#documentation-index)
- [Selected App assets](../public-assets/README.md), which are a separate asset set from the website's storytelling media
- [Smart contract references](../contracts-reference/README.md)

For the live website, see [posted.art](https://posted.art).
