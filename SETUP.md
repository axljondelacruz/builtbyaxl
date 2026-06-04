# Built by Axl — Setup & Runbook

Everything needed to run, develop, and deploy this site. Stack is free-tier:
Next.js + Cloudflare Pages + Resend. Only recurring cost is the domain (~$10/yr).

---

## 1. Prerequisites

- Node.js 18+ and npm
- A GitHub account (for the PR workflow + Cloudflare Pages git deploys)
- Cloudflare account (already set up; builtbyaxl.com is registered here)
- Resend account (free tier) for the contact form

## 2. Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Hot-reloads on save. The contact form works locally even without a Resend key —
submissions are logged to the console instead of emailed (see step 5).

## 3. Production build (verify before deploying)

```bash
npm run build      # must pass clean before opening a PR
```

If the build fails, fix it before pushing. CI/Cloudflare will run the same build.

## 4. Deploy to Cloudflare Pages

First-time setup:

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** → select the repo.
3. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output: (leave preset default)
4. Add environment variable (see step 5): `RESEND_API_KEY`.
5. Deploy. Cloudflare gives you a `*.pages.dev` preview URL.

Connect the custom domain:

6. Pages project → **Custom domains** → **Set up a domain** → `builtbyaxl.com`.
   Because the domain is already in your Cloudflare account, DNS auto-configures.
7. Add `www.builtbyaxl.com` too if you want it (redirects to apex).

After this, every push to `main` auto-deploys; pull requests get preview URLs —
which pairs well with the PR review workflow.

## 5. Contact form / email (Resend)

The form posts to `/api/contact`, which calls the Resend API.

1. Create a Resend account (free tier: 3,000 emails/mo, 100/day).
2. **Verify the domain:** Resend dashboard → Domains → Add `builtbyaxl.com`.
   Resend gives you DNS records (SPF, DKIM). Add them in Cloudflare → DNS.
   Wait for verification (usually minutes).
3. **Create an API key:** Resend → API Keys → create one.
4. **Set the key as an env var:**
   - Local: create `.env.local` in the project root:
     ```
     RESEND_API_KEY=re_your_key_here
     ```
   - Production: Cloudflare Pages → project → Settings → Environment variables →
     add `RESEND_API_KEY`.
5. Confirm the `from` and `to` addresses in `app/api/contact/route.ts` match a
   verified address (currently `hello@builtbyaxl.com`).

`.env.local` is gitignored — never commit the key.

## 6. Inbound email (hello@builtbyaxl.com)

Resend handles *sending*. To *receive* mail at hello@builtbyaxl.com for free:

- Cloudflare dashboard → builtbyaxl.com → **Email** → **Email Routing** → enable.
- Forward `hello@builtbyaxl.com` → your personal Gmail.
- (Optional) Set up Gmail "Send as" so replies come from the hello@ address.

## 7. Analytics (optional, free, no cookie banner)

Cloudflare → Pages project → enable **Web Analytics**. Privacy-friendly, no
consent banner needed.

## 8. Common tasks

| Task | Where |
|------|-------|
| Edit a section's content | `components/<Section>.tsx` |
| Change colors/fonts/spacing | `app/globals.css` (variables at top) |
| Add/adjust SEO + page title | `app/layout.tsx` (metadata) |
| Change form fields or recipient | `components/Contact.tsx` + `app/api/contact/route.ts` |
| Add a new page later | create `app/<route>/page.tsx` |
