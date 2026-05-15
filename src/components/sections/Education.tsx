import SectionHeading from "./SectionHeading";
import { education } from "@/content/education";

export default function Education() {
  if (education.length === 0) return null;
  return (
    <section
      id="education"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16 border-t border-[var(--border)]"
    >
      <SectionHeading
        eyebrow="Education"
        title="Where I studied"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <article
            key={i}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/40 p-6"
          >
            <h3 className="font-display text-xl font-bold text-[var(--fg-soft)]">
              {e.school}
            </h3>
            <p className="mt-1 text-[var(--accent)] font-semibold">
              {e.degree}
            </p>
            <p className="mt-2 text-sm text-[var(--faint)]">
              {e.period}
              {e.location ? ` · ${e.location}` : ""}
            </p>
            {e.note && (
              <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">
                {e.note}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
