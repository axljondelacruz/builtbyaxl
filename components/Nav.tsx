export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">A</span>
          <span className="brand-name">Built by Axl</span>
        </a>
        <div className="nav-links">
          <a className="muted" href="#services">Services</a>
          <a className="muted" href="#process">Process</a>
          <a className="muted" href="#work">Work</a>
          <a className="muted" href="#contact">Contact</a>
          <a className="nav-cta" href="#contact">Start a project</a>
        </div>
      </div>
    </nav>
  );
}
