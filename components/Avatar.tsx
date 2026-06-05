/**
 * Illustrated avatar of Axl — flat geometric portrait in brand tokens.
 * Hard edges only, colors via CSS variables (see globals.css).
 */
export default function Avatar() {
  return (
    <svg
      className="avatar"
      viewBox="0 0 240 240"
      role="img"
      aria-label="Illustrated portrait of Axl Jon Dela Cruz"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* backdrop */}
      <rect width="240" height="240" fill="var(--bone-dim)" />
      {/* construction-tape diagonal band */}
      <polygon points="0,240 240,0 240,60 60,240" fill="var(--accent)" />
      {/* shoulders */}
      <polygon
        points="34,240 62,184 178,184 206,240"
        fill="var(--ink)"
      />
      {/* collar notch */}
      <polygon points="103,184 120,210 137,184" fill="var(--accent)" />
      {/* neck */}
      <rect
        x="102"
        y="146"
        width="36"
        height="44"
        fill="var(--bone)"
        stroke="var(--ink)"
        strokeWidth="4"
      />
      {/* head */}
      <polygon
        points="78,62 162,62 168,96 162,134 144,164 96,164 78,134 72,96"
        fill="var(--bone)"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinejoin="miter"
      />
      {/* hair — angular block with hard fringe */}
      <polygon
        points="70,100 72,56 100,38 140,38 168,56 170,100 158,100 156,68 138,58 120,63 102,58 84,68 82,100"
        fill="var(--ink)"
      />
      {/* brows */}
      <g className="av-brows">
        <rect x="92" y="103" width="22" height="6" fill="var(--ink)" />
        <rect x="126" y="103" width="22" height="6" fill="var(--ink)" />
      </g>
      {/* eyes */}
      <g className="av-eyes">
        <rect x="97" y="115" width="12" height="11" fill="var(--ink)" />
        <rect x="131" y="115" width="12" height="11" fill="var(--ink)" />
      </g>
      {/* nose */}
      <polyline
        points="120,119 114,140 125,140"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="4"
      />
      {/* sideburns */}
      <rect x="78" y="100" width="8" height="30" fill="var(--ink)" />
      <rect x="154" y="100" width="8" height="30" fill="var(--ink)" />
      {/* beard — full, like the real thing */}
      <polygon
        points="78,128 86,124 98,142 142,142 154,124 162,128 162,134 144,166 96,166 78,134"
        fill="var(--ink)"
      />
      {/* mouth — a grin cut into the beard */}
      <rect x="106" y="150" width="28" height="6" fill="var(--bone)" />
    </svg>
  );
}
