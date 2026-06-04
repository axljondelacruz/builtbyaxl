const services = [
  { no: "01", title: "Web Design", desc: "Clean, modern layouts that fit your brand and actually convert visitors into customers — not generic templates." },
  { no: "02", title: "Development", desc: "Hand-built, fast-loading sites in modern frameworks. No clunky page builders dragging you down." },
  { no: "03", title: "Landing Pages", desc: "Single-purpose pages built to launch a product, promo, or campaign and get people to act." },
  { no: "04", title: "Refresh & Rebuild", desc: "Got an old, slow, or broken site? I'll modernize it without losing what already works." },
  { no: "05", title: "Contact & Forms", desc: "Working contact forms, booking links, and email setup so leads actually reach you." },
  { no: "06", title: "Care & Updates", desc: "Ongoing tweaks, content updates, and fixes so your site keeps earning its keep." },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-num">[ 01 ] — SERVICES</div>
        <h2 className="section-title display">What I build</h2>
        <p className="section-lead">
          Everything a small business needs to look legit online and bring in
          work. Pick one piece or the whole package.
        </p>
        <div className="svc-grid">
          {services.map((s) => (
            <div className="svc" key={s.no}>
              <div className="svc-no">{s.no}</div>
              <h3>{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
