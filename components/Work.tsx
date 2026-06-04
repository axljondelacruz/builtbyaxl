const projects = [
  {
    no: "01",
    tag: "Full site",
    title: "Project One",
    desc: "Placeholder — a real project goes here. Screenshot, one-line result, and a link.",
  },
  {
    no: "02",
    tag: "Landing page",
    title: "Project Two",
    desc: "Placeholder — swap in real work as it ships. Even spec or personal work counts.",
  },
  {
    no: "03",
    tag: "Rebuild",
    title: "Project Three",
    desc: "Placeholder — before/after rebuilds make great proof. This slot is waiting for one.",
  },
];

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-num">[ 03 ] — WORK</div>
        <h2 className="section-title display">Built &amp; shipped</h2>
        <p className="section-lead">
          A few things I&apos;ve put out into the world. More on the bench right
          now.
        </p>
        <div className="work-grid">
          {projects.map((p) => (
            <div className="work-card" key={p.no}>
              <div className="work-thumb" aria-hidden="true">
                <span className="work-thumb-mark">{p.no}</span>
              </div>
              <div className="work-body">
                <div className="work-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p className="work-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
