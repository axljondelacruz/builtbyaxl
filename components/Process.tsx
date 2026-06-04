const steps = [
  { k: "01", h: "Talk", p: "Quick call to learn your business, your customers, and what the site needs to do." },
  { k: "02", h: "Plan", p: "A clear scope, timeline, and flat price. No surprises, no hourly black hole." },
  { k: "03", h: "Build", p: "I design and develop it, sharing progress so you're never in the dark." },
  { k: "04", h: "Launch", p: "We go live, I hand over the keys, and you're set up to run it yourself." },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-num">[ 02 ] — PROCESS</div>
        <h2 className="section-title display">How it works</h2>
        <p className="section-lead">
          Straightforward and built for busy owners who don&apos;t have time for
          agency runaround.
        </p>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.k}>
              <div className="k">{s.k}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
