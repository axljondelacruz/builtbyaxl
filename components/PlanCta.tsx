"use client";

// Small client wrapper so Pricing.tsx can stay a server component.
// Clicking a pricing CTA tells the contact form which tier was chosen.
export default function PlanCta({ plan }: { plan: string }) {
  return (
    <a
      className="btn btn-primary price-cta"
      href="#contact"
      onClick={() => {
        window.dispatchEvent(new CustomEvent("plan-select", { detail: plan }));
      }}
    >
      Start here →
    </a>
  );
}
