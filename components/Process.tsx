const steps = [
  { k: "01", h: "Talk", p: "We hop on a quick call — no pitch, no pressure. You tell me about your business, and I listen for what the site really needs to do." },
  { k: "02", h: "Plan", p: "You get a clear scope, a real timeline, and one flat price. No surprises, no hourly black hole." },
  { k: "03", h: "Build", p: "I get to work and send you progress as it happens. Questions along the way? You've got my number." },
  { k: "04", h: "Launch", p: "We go live and I hand you the keys. It's your site, outright — and I don't disappear after launch." },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-num" data-reveal>[ 02 ] — PROCESS</div>
        <h2 className="section-title display rd-1" data-reveal>How it works</h2>
        <p className="section-lead rd-2" data-reveal>
          Four steps, no runaround — and I&apos;m with you for every one of
          them. Built for people with real work to get done.
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
