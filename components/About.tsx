const compare = [
  { agency: "Account managers in the middle", axl: "A direct line to the person building it" },
  { agency: "Quotes padded for overhead", axl: "One flat price, no markup" },
  { agency: "Weeks waiting on “the team”", axl: "Decisions made the same day" },
  { agency: "Your request goes in a queue", axl: "You message me, it gets handled" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-num">[ 04 ] &mdash; ABOUT</div>
        <h2 className="section-title display">One person. On purpose.</h2>
        <p className="section-lead">
          Built by Axl is one person &mdash; me. That&apos;s not a limitation.
          It&apos;s the whole point.
        </p>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Hire an agency and you talk to a salesperson, get handed to an
              account manager, and your site gets built by someone you never
              meet. Every layer adds cost, slows things down, and waters down
              what you actually asked for.
            </p>
            <p>
              Here, the person you talk to is the person who designs your site,
              builds it, and picks up the phone after launch. You explain your
              business once. Nothing gets lost in a handoff, and you&apos;re
              not paying for anyone&apos;s office.
            </p>
            <p className="about-sig">&mdash; Axl Jon Dela Cruz, Las Vegas, NV</p>
          </div>
          <div className="about-compare">
            <div className="about-compare-head">
              <div className="col them">The agency way</div>
              <div className="col me">The Axl way</div>
            </div>
            {compare.map((row) => (
              <div className="about-compare-row" key={row.axl}>
                <div className="cell them">{row.agency}</div>
                <div className="cell me">{row.axl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
