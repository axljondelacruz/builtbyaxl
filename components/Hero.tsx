export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <span className="hero-tag reveal d1">
          <span className="dot" /> Web studio · Las Vegas
        </span>
        <h1 className="display reveal d2">
          Websites<br />
          <span className="hot">built right</span><br />
          <span className="stroke">for small biz</span>
        </h1>
        <p className="hero-sub reveal d3">
          I design and build fast, modern websites for small businesses and local
          companies — no bloated page builders, no monthly hostage fees. Just clean
          code that works and looks sharp.
        </p>
        <div className="hero-actions reveal d4">
          <a className="btn btn-primary" href="#contact">Start a project →</a>
          <a className="btn btn-ghost" href="#services">See what I do</a>
        </div>
        <div className="hero-meta reveal d5">
          <div className="stat"><div className="n">10+ yrs</div><div className="l">Engineering</div></div>
          <div className="stat"><div className="n">Fast</div><div className="l">Turnaround</div></div>
          <div className="stat"><div className="n">Local</div><div className="l">& remote</div></div>
        </div>
      </div>
    </header>
  );
}
