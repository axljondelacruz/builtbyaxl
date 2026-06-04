"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("err");
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
      setForm({ name: "", email: "", business: "", message: "" });
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
              <label>Name *</label>
              <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />
            </div>
            <div className="field">
              <label>Email *</label>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
            </div>
            <div className="field">
              <label>Business</label>
              <input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Business name (optional)" />
            </div>
            <div className="field">
              <label>What do you need? *</label>
              <textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="A new site, a refresh, a landing page..." />
            </div>
            <button className="btn btn-primary" onClick={submit} disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send it →"}
            </button>
            {status === "ok" && <div className="msg-ok">Got it — I&apos;ll be in touch within a day.</div>}
            {status === "err" && <div className="msg-err">Please fill in name, email, and message.</div>}
          </div>

          <div className="contact-side">
            <div className="line">
              <div className="ic">✉</div>
              <div>
                <div className="lbl">Email</div>
                <div className="val">hello@builtbyaxl.com</div>
              </div>
            </div>
            <div className="line">
              <div className="ic">◷</div>
              <div>
                <div className="lbl">Response time</div>
                <div className="val">Within 24 hours</div>
              </div>
            </div>
            <div className="line">
              <div className="ic">⚲</div>
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
