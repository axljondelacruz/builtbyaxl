const steps = [
  { k: "01", h: "Talk", p: "A quick call — no pitch, no pressure. I learn your business, your customers, and what the site has to do." },
  { k: "02", h: "Plan", p: "You get a clear scope, a real timeline, and one flat price. No surprises, no hourly black hole." },
  { k: "03", h: "Build", p: "I design and build it, sending you progress as it happens — you're never wondering where things stand." },
  { k: "04", h: "Launch", p: "We go live and I hand over the keys. The site is yours outright — no monthly fee to keep what you paid for." },
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
