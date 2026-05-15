import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/content/skills";

const FRIENDLY_LABELS: Record<string, string> = {
  Languages: "What I code in",
  Frameworks: "What I build with",
  Databases: "Where the data lives",
  "Tools & infra": "What I use every day",
};

export default function SkillsAndTools() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16 border-t border-[var(--border)]"
    >
      <SectionHeading
        eyebrow="Toolkit"
        title="How I work"
        description="I’m comfortable across the whole stack — happy to learn whatever a project needs."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/50 p-6"
          >
            <h3 className="font-display text-lg font-bold text-[var(--fg-soft)] mb-3">
              {FRIENDLY_LABELS[group.label] ?? group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--fg)] bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] px-3 py-1 rounded-full transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
