"use client";

import { useEffect, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
  delay?: number;
};

// Counts from 0 to `to` on mount. Server-renders the final value so no-JS
// visitors and crawlers always see the real number.
export default function CountUp({ to, suffix = "", duration = 1100, delay = 0 }: Props) {
  const [n, setN] = useState(to);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    setN(0);
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        setN(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);

  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}
