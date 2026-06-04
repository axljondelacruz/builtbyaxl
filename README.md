# Built by Axl — Agency Site

Bold, maker-style one-page site for Built by Axl. Built with Next.js (App Router,
TypeScript). Structured so each section is its own component — easy to split into
separate routes (/services, /work, /about) later without a rewrite.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build
```bash
npm run build
```

## Project structure
```
app/
  layout.tsx          # fonts + metadata
  page.tsx            # assembles the sections
  globals.css         # all styling (CSS variables at top)
  api/contact/route.ts # contact form handler (Resend, edge runtime)
components/
  Nav, Hero, Services, Process, CtaStrip, Contact, Footer
```

## Contact form / email
The form posts to /api/contact, which sends via Resend.
1. Get a Resend API key (free tier: 3,000 emails/mo).
2. Verify builtbyaxl.com in Resend (add the DNS records to Cloudflare).
3. Set the env var `RESEND_API_KEY` (locally in `.env.local`, in production in
   the Cloudflare Pages dashboard → Settings → Environment variables).

Without the key set, submissions are logged (won't error) so you can develop
before email is wired up.

## Deploy to Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: Next.js. Build command `npm run build`.
4. Add env var RESEND_API_KEY.
5. After first deploy: Pages project → Custom domains → add builtbyaxl.com
   (auto-configures DNS since the domain is already in your Cloudflare account).

## Brand tokens (in globals.css)
- Ink #16140F · Bone #F4EFE6 · Accent (hot orange) #FF5A1F
- Display: Archivo Black · Body: DM Sans
