import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/content/skills";

export default function SkillsAndTools() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
    >
      <SectionHeading
        command="cat skills.txt"
        title="skills & tools"
        description="What I reach for. Comfortable across the stack — happy to learn whatever a project needs."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-5"
          >
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-[var(--term-prompt)] text-sm">▸</span>
              <h3 className="text-[var(--term-accent)] font-semibold">
                {group.label}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--term-fg)] border border-[var(--term-border)] hover:border-[var(--term-muted)] px-2.5 py-1 rounded transition-colors"
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
