const services = [
  { no: "01", title: "Web Design", desc: "A layout built around your business — what you sell, who you serve, what makes people call. Not a template with your logo pasted on." },
  { no: "02", title: "Development", desc: "Hand-coded and fast. Loads quick on a phone in a parking lot, which is where your customers actually are." },
  { no: "03", title: "Landing Pages", desc: "One page, one job: launch a promo, push a product, fill a class. Built to get clicks turned into calls." },
  { no: "04", title: "Refresh & Rebuild", desc: "Old site embarrassing you? I'll rebuild it sharp and fast — and keep the parts that already bring in work." },
  { no: "05", title: "Contact & Forms", desc: "Forms that reach your inbox, booking links that fill your calendar. Leads land where you'll actually see them." },
  { no: "06", title: "Care & Updates", desc: "New hours, new menu, new photos — send them over and they're up. Your site stays current without you touching code." },
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
