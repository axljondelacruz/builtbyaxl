const steps = [
  { k: "01", h: "Talk", p: "We hop on a quick call — no pitch, no pressure. You tell me about your business; I figure out what the site needs to do." },
  { k: "02", h: "Plan", p: "You get a clear scope, a real timeline, and one flat price. No surprises, no hourly black hole." },
  { k: "03", h: "Build", p: "I get to work and send you progress as it happens. You're never left wondering where things stand." },
  { k: "04", h: "Launch", p: "We go live and I hand you the keys. It's your site, outright — no monthly fee to keep what you already paid for." },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-num" data-reveal>[ 02 ] — PROCESS</div>
        <h2 className="section-title display rd-1" data-reveal>How it works</h2>
        <p className="section-lead rd-2" data-reveal>
          Four steps, no runaround. Built for owners who&apos;ve got an actual
          business to run.
        </p>
        <div className="steps">
          {steps.map((s, i) => (
            <div className={`step rd-${i + 1}`} data-reveal key={s.k}>
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
