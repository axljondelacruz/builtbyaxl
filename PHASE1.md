# Built by Axl — Phase 1 Task List

Cowork tasks to take the site from scaffold to launch-ready. Each task is scoped
to one PR. Tackle top to bottom; check off as merged.

> Workflow reminder: feature branch → PR → Axl reviews → merge. One logical
> change per PR. Run `npm run build` clean before opening any PR.

---

## A. Content & voice

- [ ] **A1 — Hero copy pass.** Rewrite the hero headline/subhead in Axl's voice.
      Current placeholder stats (10+ yrs, Fast, Local) — confirm or replace with
      true claims. Keep it owner-friendly, no jargon.
- [ ] **A2 — Services copy pass.** Review the 6 service cards. Adjust titles/
      descriptions to match what Axl actually wants to offer and lead with. Drop
      or merge any that don't fit; keep the grid balanced (even number reads best).
- [ ] **A3 — Process copy pass.** Confirm the 4 steps (Talk / Plan / Build /
      Launch) match how Axl actually works with clients. Tweak wording.
- [ ] **A4 — About blurb (optional).** Short founder line — 10 yrs engineering,
      local to Las Vegas, why small businesses. Could live in hero, footer, or a
      small new section. Decide placement with Axl.

## B. Portfolio / proof

- [ ] **B1 — Add a Work/Portfolio section.** New `components/Work.tsx`, slotted
      into `page.tsx` between Process and the CTA strip. Card grid matching the
      brand (hard borders, hover-invert). Start with placeholder entries.
- [ ] **B2 — Populate real examples.** Swap placeholders for 2–3 real projects
      (even personal/spec work to start): screenshot, name, one line, link.
- [ ] **B3 — Testimonial slot (optional).** Single strong quote block in brand
      style. Skip until there's a real one — no fake testimonials.

## C. Contact form end-to-end

- [ ] **C1 — Wire up Resend.** Follow SETUP.md §5: verify builtbyaxl.com in
      Resend, add DNS records in Cloudflare, set `RESEND_API_KEY`. Confirm a test
      submission actually lands in the inbox.
- [ ] **C2 — Spam guard.** Add a honeypot field (free, no captcha) to the form +
      API route. Do NOT add a captcha that hurts UX or pulls in paid services.
- [ ] **C3 — Success/error polish.** Make sure the confirmation and error states
      read well and match the brand.

## D. Launch readiness

- [ ] **D1 — SEO + metadata.** Fill out `app/layout.tsx` metadata: title,
      description, Open Graph. Add a favicon and an OG share image in brand style.
- [ ] **D2 — Responsive QA.** Check mobile (≤480), tablet, desktop. Verify the
      hero type scales, services grid stacks, contact grid collapses to one column.
- [ ] **D3 — Accessibility pass.** Color contrast, focus states, alt text, labels
      tied to inputs, semantic headings in order.
- [ ] **D4 — Deploy to Cloudflare Pages.** Follow SETUP.md §4. Connect repo,
      first deploy, attach builtbyaxl.com, enable Web Analytics.
- [ ] **D5 — Inbound email.** Enable Cloudflare Email Routing so
      hello@builtbyaxl.com forwards to Axl's Gmail (SETUP.md §6).

## E. Nice-to-haves (post-launch backlog)

- [ ] Simple pricing/packages section (flat-price tiers).
- [ ] FAQ section addressing common small-biz-owner questions.
- [ ] Split to multi-page (/services, /work, /contact) once content grows.
- [ ] Blog or notes section if Axl wants to publish.
