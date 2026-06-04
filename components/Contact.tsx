"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "invalid" | "err">("idle");
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "", website: "" });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setForm({ name: "", email: "", business: "", message: "", website: "" });
    } catch {
      setStatus("err");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-num">[ 04 ] — CONTACT</div>
        <h2 className="section-title display">Start a project</h2>
        <p className="section-lead">
          Tell me a bit about your business and what you need. I&apos;ll get back
          to you within a day.
        </p>

        <div className="contact-grid">
          <div>
            <div className="field">
              <label htmlFor="contact-name">Name *</label>
              <input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email *</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
            </div>
            <div className="field">
              <label htmlFor="contact-business">Business</label>
              <input id="contact-business" name="business" autoComplete="organization" value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Business name (optional)" />
            </div>
            {/* Honeypot — humans never see or fill this field */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-message">What do you need? *</label>
              <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="A new site, a refresh, a landing page..." />
            </div>
            <button className="btn btn-primary" onClick={submit} disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send it →"}
            </button>
            <div aria-live="polite">
              {status === "ok" && <div className="msg-ok">Got it — I&apos;ll be in touch within a day.</div>}
              {status === "invalid" && <div className="msg-err">Almost there — name, email, and a quick note are all I need.</div>}
              {status === "err" && (
                <div className="msg-err">
                  Hm, that didn&apos;t go through. Try again in a minute, or email me
                  directly: hello@builtbyaxl.com
                </div>
              )}
            </div>
          </div>

          <div className="contact-side">
            <div className="line">
              <div className="ic" aria-hidden="true">✉</div>
              <div>
                <div className="lbl">Email</div>
                <div className="val">hello@builtbyaxl.com</div>
              </div>
            </div>
            <div className="line">
              <div className="ic" aria-hidden="true">◷</div>
              <div>
                <div className="lbl">Response time</div>
                <div className="val">Within 24 hours</div>
              </div>
            </div>
            <div className="line">
              <div className="ic" aria-hidden="true">⚲</div>
              <div>
                <div className="lbl">Based in</div>
                <div className="val">Las Vegas — working everywhere</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
