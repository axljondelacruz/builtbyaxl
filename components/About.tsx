import Avatar from "./Avatar";

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
        <div className="section-num" data-reveal>[ 04 ] &mdash; ABOUT</div>
        <h2 className="section-title display rd-1" data-reveal>One person. On purpose.</h2>
        <p className="section-lead rd-2" data-reveal>
          Built by Axl is one person &mdash; me. That&apos;s not a limitation.
          It&apos;s the whole point.
        </p>
        <div className="about-grid">
          <div className="about-copy rd-1" data-reveal>
            <p>
              Since graduating from college, I&apos;ve wanted to build for
              small businesses — the shops and services that hold a
              neighborhood together but rarely get a developer in their
              corner. Built by Axl is that idea, all grown up.
            </p>
            <p>
              So when you work with me, the person you text is the person who
              designs your site, builds it, and picks up the phone after
              launch. You explain your business once — to me — and nothing
              gets lost in a handoff. It&apos;s the closest thing to having a
              web developer of your own.
            </p>
            <div className="about-sig-row">
              <div className="about-avatar">
                <Avatar />
              </div>
              <div>
                <p className="about-sig">&mdash; Axl Jon Dela Cruz</p>
                <p className="about-sig-sub">Designer &amp; developer &middot; Las Vegas, NV</p>
              </div>
            </div>
          </div>
          <div className="about-compare rd-2" data-reveal>
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
