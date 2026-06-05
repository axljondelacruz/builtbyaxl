const services = [
  { no: "01", title: "Web Design", desc: "A layout built around your business — what you sell, who you serve, what makes people call. Not some template with your logo slapped on." },
  { no: "02", title: "Development", desc: "Hand-coded and fast. Loads in a blink on a phone in a parking lot — because that's where your customers actually are." },
  { no: "03", title: "Landing Pages", desc: "One page, one job: launch a promo, push a product, fill a class. Built to get clicks turned into calls." },
  { no: "04", title: "Refresh & Rebuild", desc: "Outgrown your old site? I'll rebuild it sharp and fast — and keep the parts that already bring in work." },
  { no: "05", title: "Contact & Forms", desc: "Forms that reach your inbox, booking links that fill your calendar. Leads land where you'll actually see them." },
  { no: "06", title: "Care & Updates", desc: "New hours, new menu, new photos — text them over and they're up. Your site stays current without you ever touching code." },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-num" data-reveal>[ 01 ] — SERVICES</div>
        <h2 className="section-title display rd-1" data-reveal>What I build</h2>
        <p className="section-lead rd-2" data-reveal>
          Everything you need to look legit online and bring in work — for
          your storefront, your service, or the thing you&apos;re about to
          launch. Start with one piece or grab the whole package.
        </p>
        <div className="svc-grid">
          {services.map((s, i) => (
            <div className={`svc rd-${(i % 3) + 1}`} data-reveal key={s.no}>
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
