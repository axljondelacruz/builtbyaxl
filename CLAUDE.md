# Built by Axl — Project Context

> Always-loaded context for Cowork / Claude agents working on this repo.
> Read this fully before making changes. Framework-specific rules are in AGENTS.md.

@AGENTS.md

---

## What this is

**Built by Axl** is the marketing site for a one-person web studio run by Axl Jon
Dela Cruz (Las Vegas). The studio offers web design and development for small
businesses and local companies. This repo is the studio's own site:
**builtbyaxl.com**.

Currently a single-page site, intentionally structured so each section is its own
component and can be promoted to a standalone route later (multi-page) without a
rewrite.

## Who the site is for

Small business owners and local companies who need a real website without agency
bloat or monthly page-builder fees. Copy should speak to busy, non-technical
owners: plain language, concrete benefits, no jargon.

## Tech stack

- **Framework:** Next.js (App Router, TypeScript). NOTE: this is a newer Next.js
  than your training data — see AGENTS.md and check `node_modules/next/dist/docs/`
  before writing framework code.
- **Hosting:** Cloudflare Pages (free tier). Domain builtbyaxl.com is registered
  in Cloudflare; DNS is managed there.
- **Email / contact form:** Resend (free tier). Form posts to `/api/contact`
  (edge runtime), which sends via the Resend API.
- **Styling:** Plain CSS in `app/globals.css` using CSS variables. No Tailwind,
  no CSS-in-JS. Keep it that way unless explicitly told otherwise.
- **Fonts:** Google Fonts (Archivo Black, DM Sans) self-hosted at build time
  via `next/font/google` in `app/layout.tsx`, exposed as CSS variables
  (`--font-archivo-black`, `--font-dm-sans`) referenced in `globals.css`.

## Brand system

Use these tokens exactly. They are defined as CSS variables at the top of
`app/globals.css` — reference the variables, never hardcode hex values in
components.

| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#16140F` | Primary text, borders, dark surfaces |
| `--ink-soft` | `#2A2620` | Secondary text |
| `--bone` | `#F4EFE6` | Page background |
| `--bone-dim` | `#E4DCCC` | Muted fills |
| `--accent` | `#FF5A1F` | Hot orange — primary accent, CTAs, highlights |
| `--accent-deep` | `#D8410D` | Accent pressed/error states |
| `--steel` | `#6B6557` | Labels, captions |

- **Display font:** Archivo Black (uppercase, tight letter-spacing). Use the
  `.display` class.
- **Body font:** DM Sans.
- **Aesthetic:** Bold / maker / industrial-workshop. Hard 2px ink borders,
  hover-to-invert cells, blueprint grid background, offset hard shadows (no soft
  blur), construction-tape orange. Confident, not corporate. Keep it sharp-edged —
  avoid rounded corners, gradients, and soft drop shadows.

## Repo structure

```
app/
  layout.tsx            # fonts + metadata
  page.tsx              # assembles sections in order
  globals.css           # ALL styling; CSS variables at top
  api/contact/route.ts  # contact form handler (Resend, edge runtime)
components/
  Nav.tsx  Hero.tsx  Services.tsx  Process.tsx
  CtaStrip.tsx  Contact.tsx  Footer.tsx
```

One section = one component. To add a page later, lift the component into
`app/<route>/page.tsx`.

## Conventions

- TypeScript everywhere. Components are server components by default; only add
  `"use client"` when a component needs state/interactivity (e.g. `Contact.tsx`).
- Reference brand colors via CSS variables only.
- No new dependencies without a clear reason — this site should stay lean and
  deploy free. Flag any proposed dependency in the PR description.
- Keep copy in the voice described above: plain, direct, owner-friendly.
- Do not commit secrets. `RESEND_API_KEY` lives in env vars (local `.env.local`,
  production in the Cloudflare Pages dashboard), never in code.

## Workflow (IMPORTANT)

This project uses a **PR-based approval workflow**, same as the Autobot ACO setup.

- Do NOT push directly to `main`.
- Work on a feature branch, open a pull request, and summarize what changed and
  why in the PR description.
- Wait for Axl's review and approval before merging.
- Keep PRs focused — one logical change per PR where practical.

## Out of scope (don't do without asking)

- Switching frameworks, CSS approach, or hosting.
- Adding analytics/tracking that requires a cookie banner (prefer Cloudflare Web
  Analytics, which doesn't).
- Anything that turns the free-tier stack into a paid dependency.
