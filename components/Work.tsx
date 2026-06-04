const projects = [
  {
    no: "01",
    tag: "Landing page + members area",
    title: "Autobot ACO",
    mark: "ACO",
    desc: "Pre-launch site for an automated checkout service for collectors. Landing page, waitlist signup, and a members-only area — live and collecting signups.",
    href: "https://www.autobotaco.com/",
  },
];

const openSlots = [
  {
    no: "02",
    title: "Your business here",
    desc: "This slot is open. If your shop, service, or side hustle needs a site, it could be the next thing on this wall.",
  },
  {
    no: "03",
    title: "Next on the bench",
    desc: "Got an old site that's embarrassing you, or no site at all? Reach out — rebuilds and from-scratch builds both welcome.",
  },
];

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-num">[ 03 ] — WORK</div>
        <h2 className="section-title display">Built &amp; shipped</h2>
        <p className="section-lead">
          What&apos;s out in the world so far — and room on the wall for what&apos;s
          next.
        </p>
        <div className="work-grid">
          {projects.map((p) => (
            <a
              className="work-card work-card-link"
              key={p.no}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="work-thumb" aria-hidden="true">
                <span className="work-thumb-mark">{p.mark}</span>
              </div>
              <div className="work-body">
                <div className="work-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p className="work-desc">{p.desc}</p>
                <span className="work-visit">Visit the site →</span>
              </div>
            </a>
          ))}
          {openSlots.map((s) => (
            <a className="work-card work-card-open" key={s.no} href="#contact">
              <div className="work-thumb" aria-hidden="true">
                <span className="work-thumb-mark">{s.no}</span>
              </div>
              <div className="work-body">
                <div className="work-tag work-tag-open">Open slot</div>
                <h3>{s.title}</h3>
                <p className="work-desc">{s.desc}</p>
                <span className="work-visit">Claim this slot →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
