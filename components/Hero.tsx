import CountUp from "./CountUp";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
        <span className="hero-tag reveal d1">
          <span className="dot" /> Web studio · Las Vegas
        </span>
        <h1 className="display reveal d2">
          Your website.<br />
          <span className="hot">No agency.</span><br />
          <span className="stroke">No rent.</span>
        </h1>
        <p className="hero-sub reveal d3">
          Here&apos;s the deal: agencies charge five figures, and page builders
          charge you forever. I just build you a great site by hand — fast,
          sharp, yours outright — for a price you can actually say yes to.
        </p>
        <div className="hero-actions reveal d4">
          <a className="btn btn-primary" href="#contact">Start a project →</a>
          <a className="btn btn-ghost" href="#services">See what I do</a>
        </div>
        <div className="hero-meta reveal d5">
          <div className="stat"><div className="n"><CountUp to={10} suffix="+" delay={450} /> yrs</div><div className="l">Engineering</div></div>
          <div className="stat"><div className="n">Fast</div><div className="l">Turnaround</div></div>
          <div className="stat"><div className="n">Local</div><div className="l">& remote</div></div>
        </div>
        </div>
        <div className="hero-portrait reveal d4">
          <div className="hero-portrait-frame">
            {/* eslint-disable-next-line @next/next/no-img-element -- static asset; Pages has no image optimization */}
            <img
              src="/axl.png"
              alt="Illustrated portrait of Axl Jon Dela Cruz"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
