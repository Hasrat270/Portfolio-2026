import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work — case studies with context, decisions, and outcomes.",
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects();
  return (
    <PageShell
      command="ls -la ~/projects"
      title="projects"
      description="Each project is a case study: context → decisions → tradeoffs → outcome."
    >
      <div className="space-y-4">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block rounded-lg border border-[var(--term-border)] hover:border-[var(--term-prompt)] bg-[var(--term-surface)] p-5 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <h2 className="text-lg font-semibold text-[var(--term-fg)] group-hover:text-[var(--term-accent)] transition-colors">
                {p.frontmatter.title}
              </h2>
              <span className="text-[var(--term-muted)] text-xs">
                {p.frontmatter.date.slice(0, 10)}
              </span>
            </div>
            <p className="text-sm text-[var(--term-muted)] mt-1.5 leading-relaxed">
              {p.frontmatter.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.frontmatter.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wider text-[var(--term-accent)] border border-[var(--term-border)] px-1.5 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
