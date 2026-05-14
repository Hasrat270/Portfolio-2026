"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "ok" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    const body = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setError(data.error || `Something went wrong (${res.status}).`);
        return;
      }
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Network error.");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-16 border-t border-[var(--border)]"
    >
      <SectionHeading
        eyebrow="Let’s talk"
        title="Say hello"
        description="Email is the fastest way to reach me. The form below lands in the same inbox."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <ContactLine label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <ContactLine label="GitHub" value={SITE.github} href={SITE.socials.github} />
          <ContactLine label="LinkedIn" value="hasrat270" href={SITE.socials.linkedin} />
          <ContactLine label="Twitter" value="@hasrat270" href={SITE.socials.x} />
          <ContactLine label="Résumé" value="Download PDF" href={SITE.resumeUrl} />
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/40 p-6 space-y-4"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <Field name="name" label="Your name" placeholder="Ada Lovelace" />
          <Field
            name="email"
            label="Your email"
            type="email"
            placeholder="you@example.com"
          />
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-semibold text-[var(--fg-soft)] mb-1.5"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={10}
              rows={5}
              placeholder="Tell me about what you’re working on…"
              className="w-full bg-[var(--bg)] border border-[var(--border-strong)] focus:border-[var(--accent)] outline-none rounded-md px-3 py-2 text-base text-[var(--fg)] resize-y"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--bg)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors py-2.5 rounded-md font-semibold"
          >
            {status === "sending"
              ? "Sending…"
              : status === "ok"
                ? "Sent — talk soon ✓"
                : "Send message"}
          </button>
          {status === "error" && (
            <p className="text-sm text-[var(--danger)]" role="alert">
              {error}
            </p>
          )}
          {status === "ok" && (
            <p className="text-sm text-[var(--success)]" role="status">
              Got it — I’ll reply within a couple of days.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        className="block text-sm font-semibold text-[var(--fg-soft)] mb-1.5"
      >
        {label}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-[var(--bg)] border border-[var(--border-strong)] focus:border-[var(--accent)] outline-none rounded-md px-3 py-2 text-base text-[var(--fg)]"
      />
    </div>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-baseline gap-4 group"
    >
      <span className="text-sm font-semibold text-[var(--faint)] uppercase tracking-widest w-24 shrink-0">
        {label}
      </span>
      <span className="text-base text-[var(--fg-soft)] group-hover:text-[var(--accent)] transition-colors break-all underline underline-offset-4 decoration-transparent group-hover:decoration-[var(--accent)]">
        {value}
      </span>
    </a>
  );
}
