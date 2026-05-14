import SectionHeading from "./SectionHeading";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
    >
      <SectionHeading
        command="cat testimonials/*"
        title="testimonials"
        description="A few kind words from people I've worked with."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-5"
          >
            <blockquote className="text-[var(--term-fg)]/95 leading-relaxed text-sm relative">
              <span className="text-[var(--term-prompt)] text-xl absolute -left-1 -top-1 select-none">
                &ldquo;
              </span>
              <span className="pl-3 block">{t.quote}</span>
            </blockquote>
            <figcaption className="mt-4 text-sm text-[var(--term-muted)]">
              <span className="text-[var(--term-accent)]">{t.author}</span>
              <span> · {t.role}</span>
              {t.company && <span> · {t.company}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
