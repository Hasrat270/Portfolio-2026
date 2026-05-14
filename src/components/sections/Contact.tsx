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
      website: String(fd.get("website") || ""), // honeypot
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
        setError(data.error || `request failed (${res.status})`);
        return;
      }
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "network error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
    >
      <SectionHeading
        command="mail -s 'hello' hasrat"
        title="contact"
        description="Email is fastest. The form below lands in the same inbox."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <ContactLine label="email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <ContactLine label="github" value={SITE.github} href={SITE.socials.github} />
          <ContactLine label="linkedin" value="hasrat270" href={SITE.socials.linkedin} />
          <ContactLine label="x" value="@hasrat270" href={SITE.socials.x} />
          <ContactLine label="resume" value="resume.pdf" href={SITE.resumeUrl} />
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-5 space-y-3"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <Field name="name" label="name" placeholder="Ada Lovelace" />
          <Field
            name="email"
            label="email"
            type="email"
            placeholder="you@example.com"
          />
          <div>
            <label className="text-xs text-[var(--term-muted)] uppercase tracking-wider block mb-1">
              <span className="text-[var(--term-prompt)]">$</span> message
            </label>
            <textarea
              name="message"
              required
              minLength={10}
              rows={5}
              placeholder="what's on your mind?"
              className="w-full bg-[var(--term-bg)] border border-[var(--term-border)] focus:border-[var(--term-prompt)] outline-none rounded px-3 py-2 text-sm font-mono text-[var(--term-fg)] resize-y"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full border border-[var(--term-prompt)] text-[var(--term-prompt)] hover:bg-[var(--term-prompt)] hover:text-[var(--term-bg)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors py-2 rounded text-sm font-semibold"
          >
            {status === "sending"
              ? "$ sending..."
              : status === "ok"
                ? "✓ sent — talk soon"
                : "$ ./send"}
          </button>
          {status === "error" && (
            <p className="text-xs text-[var(--term-danger)]">× {error}</p>
          )}
          {status === "ok" && (
            <p className="text-xs text-[var(--term-prompt)]">
              ✓ message received. I&apos;ll reply within a couple of days.
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
      <label className="text-xs text-[var(--term-muted)] uppercase tracking-wider block mb-1">
        <span className="text-[var(--term-prompt)]">$</span> {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-[var(--term-bg)] border border-[var(--term-border)] focus:border-[var(--term-prompt)] outline-none rounded px-3 py-2 text-sm font-mono text-[var(--term-fg)]"
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
      className="flex items-baseline gap-3 group"
    >
      <span className="text-[var(--term-muted)] text-sm w-20">{label}</span>
      <span className="text-[var(--term-fg)] group-hover:text-[var(--term-accent)] transition-colors break-all">
        {value}
      </span>
    </a>
  );
}
