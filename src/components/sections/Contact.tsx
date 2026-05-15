"use client";

import SectionHeading from "./SectionHeading";
import { SITE } from "@/lib/site";

export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    // Build a single WhatsApp message with all the form context.
    const body =
      `Hi Hasrat — I'm reaching out via your portfolio.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`;

    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16 border-t border-[var(--border)]"
    >
      <SectionHeading
        eyebrow="Let’s talk"
        title="Say hello"
        description="WhatsApp is the fastest way to reach me. Fill the form and I’ll get your message instantly — or use any link on the left."
      />
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <ContactLine
            label="WhatsApp"
            value="+92 308 2841437"
            href={`https://wa.me/${SITE.whatsapp}`}
          />
          <ContactLine
            label="Email"
            value={SITE.email}
            href={`mailto:${SITE.email}`}
          />
          <ContactLine
            label="GitHub"
            value={SITE.github}
            href={SITE.socials.github}
          />
          <ContactLine
            label="LinkedIn"
            value="hasrat3701"
            href={SITE.socials.linkedin}
          />
          <ContactLine
            label="X / Twitter"
            value="@Hasrat09042872"
            href={SITE.socials.x}
          />
          <ContactLine
            label="Résumé"
            value="Download PDF"
            href={SITE.resumeUrl}
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/40 p-5 sm:p-6 space-y-4"
        >
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
            className="w-full inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--bg)] transition-colors py-2.5 rounded-md font-semibold"
          >
            <WhatsAppIcon />
            Send on WhatsApp
          </button>
          <p className="text-xs text-[var(--faint)] text-center">
            Submitting opens WhatsApp with your message pre-filled.
          </p>
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
      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 group"
    >
      <span className="text-xs font-semibold text-[var(--faint)] uppercase tracking-widest sm:w-24 sm:shrink-0">
        {label}
      </span>
      <span className="text-base text-[var(--fg-soft)] group-hover:text-[var(--accent)] transition-colors break-all underline underline-offset-4 decoration-transparent group-hover:decoration-[var(--accent)]">
        {value}
      </span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.02 0C5.4 0 .02 5.37.02 11.99c0 2.11.55 4.18 1.6 6.01L0 24l6.16-1.61a11.97 11.97 0 0 0 5.85 1.49h.01c6.62 0 12-5.37 12-11.99 0-3.2-1.25-6.21-3.5-8.41ZM12.02 21.83h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.66.96.98-3.57-.24-.37a9.84 9.84 0 0 1-1.5-5.28c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.86 9.86 0 0 1 2.9 6.99c0 5.45-4.44 9.83-9.9 9.83Zm5.42-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.49-.5-.66-.51l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.86 1.2 3.05.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}
