const faqs = [
  {
    q: "How much does a website cost?",
    a: "Landing pages start at $750, full sites at $2,500 — see the pricing above. You'll get a flat quote before any work starts, and that's the number you pay. No surprise line items.",
  },
  {
    q: "How long does it take?",
    a: "A landing page is live in about a week. A full site usually takes two to three weeks, depending on how fast we can get your content together. You'll see progress along the way, not a big reveal at the end.",
  },
  {
    q: "Are there monthly fees?",
    a: "No. You pay once for the build. Hosting runs on infrastructure that costs nothing at your scale, and your only recurring cost is the domain name — around $10 a year, paid directly to the registrar, not to me.",
  },
  {
    q: "Who owns the site?",
    a: "You do. The code, the domain, the content — all of it, outright. If we part ways tomorrow, your site keeps running and any developer can pick it up. No lock-in, ever.",
  },
  {
    q: "What about hosting?",
    a: "Included in the build. Your site goes on fast, modern hosting with a free SSL certificate, and I set it all up under accounts you own. Nothing for you to manage.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Small fixes shortly after launch are on me. After that, you can pay per change, or pick the Rebuild + Care package which includes monthly updates. Either way, you message me directly and it gets handled.",
  },
  {
    q: "I already have a website. Can you fix it instead?",
    a: "Usually the honest answer is a rebuild — it's faster and cheaper than untangling an old page-builder site, and you keep everything that already works: your domain, your content, your Google ranking.",
  },
  {
    q: "Do I have to write the words and take the photos?",
    a: "No. Plain-language copy help is part of the build — we'll get your story out of your head in one conversation. Photos: real ones of your business beat stock every time, and phone photos are usually plenty.",
  },
  {
    q: "Can we meet in person?",
    a: "If you're in the Las Vegas area, yes — coffee works. Otherwise a call does the job. Either way, you're talking to the person actually building your site.",
  },
];

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-num" data-reveal>[ 06 ] — FAQ</div>
        <h2 className="section-title display rd-1" data-reveal>Fair questions</h2>
        <p className="section-lead rd-2" data-reveal>
          The stuff people actually ask before hiring someone to build their
          site. Straight answers, no fine print.
        </p>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq-item" data-reveal key={f.q}>
              <summary>
                <span className="faq-q">{f.q}</span>
                <span className="faq-marker" aria-hidden="true">+</span>
              </summary>
              <p className="faq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
