import SectionHeading from "./SectionHeading";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16 border-t border-[var(--border)]"
    >
      <SectionHeading
        eyebrow="Kind words"
        title="What people say"
        description="A few people I’ve had the pleasure of working with."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/50 p-6"
          >
            <blockquote className="font-display text-lg text-[var(--fg-soft)] leading-relaxed">
              <span className="text-[var(--accent)] text-3xl absolute -ml-2 -mt-3 select-none">
                &ldquo;
              </span>
              <span className="block pl-3">{t.quote}</span>
            </blockquote>
            <figcaption className="mt-5 text-sm text-[var(--muted)]">
              <span className="text-[var(--fg-soft)] font-semibold">
                {t.author}
              </span>
              <span> · {t.role}</span>
              {t.company && <span> · {t.company}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
