import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { getFeaturedProjects } from "@/lib/content";

export default function Projects() {
  const projects = getFeaturedProjects();
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
    >
      <SectionHeading
        command="ls -la ~/projects"
        title="projects"
        description="A few things I've shipped recently. Each links to a case study with context, decisions, tradeoffs, and outcomes."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block rounded-lg border border-[var(--term-border)] hover:border-[var(--term-prompt)] bg-[var(--term-surface)] p-5 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-[var(--term-fg)] group-hover:text-[var(--term-accent)] transition-colors tracking-tight">
                {p.frontmatter.title}
              </h3>
              <span className="text-[var(--term-faint)] text-xs font-mono whitespace-nowrap mt-1.5">
                {p.frontmatter.date.slice(0, 7)}
              </span>
            </div>
            <p className="text-base text-[var(--term-muted)] mt-3 leading-relaxed">
              {p.frontmatter.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.frontmatter.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono uppercase tracking-wider text-[var(--term-accent)] border border-[var(--term-border-strong)] bg-[var(--term-bg)]/40 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm font-semibold text-[var(--term-prompt)] group-hover:translate-x-0.5 transition-transform">
              read case study →
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/projects"
          className="text-sm text-[var(--term-accent)] hover:text-[var(--term-prompt)]"
        >
          → see all projects
        </Link>
      </div>
    </section>
  );
}
