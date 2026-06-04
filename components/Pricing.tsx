const tiers = [
  {
    no: "01",
    name: "Landing Page",
    price: "from $750",
    blurb: "One sharp page that gets people to act.",
    features: [
      "Single-page design & build",
      "Contact form wired to your inbox",
      "Mobile-fast, SEO basics included",
      "Live in about a week",
    ],
    featured: false,
  },
  {
    no: "02",
    name: "Full Site",
    price: "from $2,500",
    blurb: "The complete web presence for your business.",
    features: [
      "Multi-section custom design",
      "Copy help in plain language",
      "Forms, booking links, email setup",
      "You own everything outright",
    ],
    featured: true,
  },
  {
    no: "03",
    name: "Rebuild + Care",
    price: "from $3,000",
    blurb: "Your old site, rebuilt right — and kept current.",
    features: [
      "Full rebuild of an existing site",
      "Keep what already works",
      "Monthly content updates included",
      "Priority fixes when you need them",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-num">[ 04 ] — PRICING</div>
        <h2 className="section-title display">Flat &amp; fair</h2>
        <p className="section-lead">
          One price, agreed up front. No hourly meter, no surprise invoices, no
          monthly rent on your own website.
        </p>
        <div className="price-grid">
          {tiers.map((t) => (
            <div className={t.featured ? "price-card featured" : "price-card"} key={t.no}>
              {t.featured && <div className="price-flag">Most popular</div>}
              <div className="price-no">{t.no}</div>
              <h3>{t.name}</h3>
              <div className="price-amount">{t.price}</div>
              <p className="price-blurb">{t.blurb}</p>
              <ul className="price-list">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className="btn btn-primary price-cta" href="#contact">
                Start here →
              </a>
            </div>
          ))}
        </div>
        <p className="price-note">
          Every project is different — these are honest starting points, not
          gotchas. Exact quote after we talk.
        </p>
      </div>
    </section>
  );
}
