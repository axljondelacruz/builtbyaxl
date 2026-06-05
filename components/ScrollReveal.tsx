"use client";

import { useEffect } from "react";

// Runs before first paint: only hide [data-reveal] elements when JS is
// running and the visitor hasn't asked for reduced motion. No-JS visitors
// (and crawlers) get the page fully visible with zero animation.
const FX_BOOT =
  'try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("fx")}catch(e){}';

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const fxOn = document.documentElement.classList.contains("fx");

    if (!fxOn || !("IntersectionObserver" in window)) {
      // Motion off or no observer support: show everything immediately.
      document.documentElement.classList.remove("fx");
      els.forEach((el) => el.setAttribute("data-reveal", "in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "in");
            io.unobserve(entry.target);
          }
        }
      },
      // Fire slightly before the element fully enters, so it rises into place.
      { rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <script dangerouslySetInnerHTML={{ __html: FX_BOOT }} />;
}
