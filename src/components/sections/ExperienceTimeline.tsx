import SectionHeading from "./SectionHeading";
import { experience } from "@/content/experience";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
    >
      <SectionHeading
        command="git log --author=hasrat"
        title="experience"
        description="The professional commit log."
      />
      <ol className="relative border-l border-[var(--term-border)] ml-2 space-y-8">
        {experience.map((e, idx) => (
          <li key={`${e.company}-${idx}`} className="pl-6 relative">
            <span className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-[var(--term-prompt)] ring-2 ring-[var(--term-bg)]" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-[var(--term-fg)]">
                {e.role}
              </h3>
              <span className="text-[var(--term-accent)]">@ {e.company}</span>
              <span className="text-[var(--term-muted)] text-sm ml-auto">
                {e.period}
                {e.location ? ` · ${e.location}` : ""}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {e.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-sm text-[var(--term-fg)]/90 leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--term-prompt)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
