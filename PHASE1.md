# Built by Axl — Phase 1 Task List

Cowork tasks to take the site from scaffold to launch-ready. Each task is scoped
to one PR. Tackle top to bottom; check off as merged.

> Workflow reminder: feature branch → PR → Axl reviews → merge. One logical
> change per PR. Run `npm run build` clean before opening any PR.

**Status: Phase 1 complete (June 2026).** Site is live at builtbyaxl.com with
working contact form. Remaining unchecked items are deliberately deferred —
see notes inline.

---

## A. Content & voice

- [x] **A1 — Hero copy pass.** Rewrite the hero headline/subhead in Axl's voice.
      Current placeholder stats (10+ yrs, Fast, Local) — confirm or replace with
      true claims. Keep it owner-friendly, no jargon. *(PR #1)*
- [x] **A2 — Services copy pass.** Review the 6 service cards. Adjust titles/
      descriptions to match what Axl actually wants to offer and lead with. Drop
      or merge any that don't fit; keep the grid balanced (even number reads best).
      *(PR #2 — tightened copy, kept all 6)*
- [x] **A3 — Process copy pass.** Confirm the 4 steps (Talk / Plan / Build /
      Launch) match how Axl actually works with clients. Tweak wording. *(PR #3)*
- [x] **A4 — About blurb.** Short founder line — 10 yrs engineering, local to
      Las Vegas, why small businesses. *(PRs #9, #12 — own section with
      illustrated SVG avatar)*

## B. Portfolio / proof

- [x] **B1 — Add a Work/Portfolio section.** New `components/Work.tsx`, slotted
      into `page.tsx` between Process and the CTA strip. Card grid matching the
      brand (hard borders, hover-invert). Start with placeholder entries. *(PR #4)*
- [x] **B2 — Populate real examples.** Autobot ACO *(PR #10)* and Built by Axl
      itself *(PR #13)*, plus one open-slot card. Add new client work as it ships.
- [ ] **B3 — Testimonial slot (optional).** Single strong quote block in brand
      style. **Deferred until there's a real quote — no fake testimonials.**

## C. Contact form end-to-end

- [x] **C1 — Wire up Resend.** Domain verified, DNS records in Cloudflare,
      `RESEND_API_KEY` set as Pages secret, test email Delivered. *(June 2026)*
- [x] **C2 — Spam guard.** Honeypot field on form + API route, no captcha. *(PR #5)*
- [x] **C3 — Success/error polish.** Confirmation and error states in brand
      style. *(PR #5)*

## D. Launch readiness

- [x] **D1 — SEO + metadata.** Title, description, Open Graph, favicon, OG share
      image. *(PR #6)*
- [x] **D2 — Responsive QA.** Mobile (≤480), tablet, desktop verified. *(PR #7)*
- [x] **D3 — Accessibility pass.** Contrast, focus states, alt text, labels,
      heading order, reduced-motion. *(PR #7)*
- [x] **D4 — Deploy to Cloudflare Pages.** Live at builtbyaxl.com +
      builtbyaxl.pages.dev. `nodejs_compat` flag required in BOTH Production and
      Preview environments. Branch previews at `<branch>.builtbyaxl.pages.dev`.
- [x] **D5 — Inbound email.** Cloudflare Email Routing forwards
      hello@builtbyaxl.com to Axl's Gmail.

## E. Nice-to-haves (post-launch backlog)

- [x] Simple pricing/packages section (flat-price tiers). *(PR #8)*
- [x] FAQ section addressing common small-biz-owner questions. *(PR #14)*
- [ ] Split to multi-page (/services, /work, /contact) once content grows.
      **Deferred — revisit at ~4+ portfolio projects; /work and /pricing first.**
- [ ] Blog or notes section if Axl wants to publish.
