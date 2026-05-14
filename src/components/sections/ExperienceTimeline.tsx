import SectionHeading from "./SectionHeading";
import { experience } from "@/content/experience";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-16 border-t border-[var(--border)]"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I’ve worked"
        description="A short version of the journey so far."
      />
      <ol className="relative border-l-2 border-[var(--border-strong)] ml-2 space-y-10">
        {experience.map((e, idx) => (
          <li key={`${e.company}-${idx}`} className="pl-6 relative">
            <span className="absolute -left-[7px] top-2.5 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-bold text-[var(--fg-soft)]">
                {e.role}
              </h3>
              <span className="text-[var(--accent)] font-semibold">
                · {e.company}
              </span>
              <span className="text-[var(--faint)] text-sm sm:ml-auto">
                {e.period}
                {e.location ? ` · ${e.location}` : ""}
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {e.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-base text-[var(--fg)] leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--accent)] before:font-bold"
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
