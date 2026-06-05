import { NextResponse } from "next/server";

// Runs on the edge so it deploys cleanly to Cloudflare Pages.
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { name, email, business, plan, message, website } = await req.json();

    // Honeypot: real visitors never fill the hidden "website" field.
    // Bots that do get a fake success so they don't retry.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    // If no key is configured yet, accept the submission gracefully in dev.
    if (!apiKey) {
      console.log("Contact (no RESEND_API_KEY set):", { name, email, business, plan, message });
      return NextResponse.json({ ok: true, note: "logged" });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Built by Axl <hello@builtbyaxl.com>",
        to: ["hello@builtbyaxl.com"],
        reply_to: email,
        subject: `New project inquiry — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business || "—"}\nInterested in: ${plan || "—"}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", detail);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
