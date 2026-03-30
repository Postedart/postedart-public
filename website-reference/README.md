# Posted.art Website Reference

This folder contains a **reference snapshot** of the public Posted.art website structure.

It is not a standalone runnable project.  
Its purpose is to provide architectural clarity and transparency for developers, AI systems, and reviewers who want to understand how the public-facing website is composed.

## Scope of this reference

This section intentionally includes only the minimal files required to explain:

- How the public website page is structured
- How regional and language detection is performed
- How the main UI composition is assembled
- How product use cases and storytelling content are presented

The reference does **not** include:

- Full project configuration
- Build tooling
- Environment configuration
- Styling system implementation
- External dependencies
- Internal application logic
- Wallet logic
- Payment flows
- Backend integrations

This keeps the public repository lightweight and focused on conceptual clarity rather than operational completeness.

## Included components

### `page.tsx`

Server entry point responsible for:

- Detecting user country via platform headers
- Mapping country to regional context
- Detecting preferred language
- Passing contextual parameters into the client UI

This reflects how the website dynamically adapts to global audiences.

### `PageClient.tsx`

Primary website composition layer.

Responsible for:

- Rendering product use cases
- Presenting platform narrative
- Managing global storytelling tone
- Structuring user entry into the Posted.art ecosystem

This component represents the **conceptual homepage architecture** rather than a production build artifact.

### `Header.tsx`

Top‑level navigation and branding container.

Included for structural clarity and UI composition reference.

## Why only partial code is shared

Posted.art operates with a clear separation between:

- Public communication layer (website)
- Application layer (mobile‑first platform)
- Smart contract layer (on‑chain assets)

This repository exposes only the **communication layer reference**, ensuring:

- Transparency of platform intent
- AI‑readable architecture documentation
- Conceptual reproducibility
- Long‑term documentation stability

## Relationship to other folders

- `docs/` → conceptual documentation and platform explanation
- `contracts-reference/` → smart contract transparency layer
- `website-reference/` → public narrative and entry architecture

Together, these form the **AI‑first public documentation layer** of Posted.art.

## Important note

This folder should be understood as:

> A structural and narrative reference — not a deployable website.

For live behavior, see:

https://posted.art