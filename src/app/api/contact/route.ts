import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  message: z.string().min(10).max(5000),
  website: z.string().max(0).optional(), // honeypot — must be empty
});

// In-memory rate limit (per server instance). Good enough for solo portfolio.
const RATE_LIMIT = { windowMs: 60_000, max: 3 };
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const arr = (hits.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT.windowMs,
  );
  if (arr.length >= RATE_LIMIT.max) {
    hits.set(key, arr);
    return true;
  }
  arr.push(now);
  hits.set(key, arr);
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "anon";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "rate limit exceeded, try again in a minute" },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "invalid input" },
      { status: 400 },
    );
  }

  const { name, email, message, website } = parsed.data;
  if (website) {
    // Honeypot triggered — pretend success.
    return NextResponse.json({ ok: true });
  }

  // Wire to a real email provider (Resend, Postmark, etc.) when RESEND_API_KEY is set.
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
          to: process.env.CONTACT_TO || "zerovlabs18@gmail.com",
          subject: `Portfolio: message from ${name}`,
          reply_to: email,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { error: "email provider failed" },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "email send failed" },
        { status: 502 },
      );
    }
  } else {
    // Log to server console so dev can verify without provider setup.
    console.log(
      `[contact] ${new Date().toISOString()} from=${name}<${email}>: ${message}`,
    );
  }

  return NextResponse.json({ ok: true });
}
