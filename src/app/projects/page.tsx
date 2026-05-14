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
      eyebrow="Work"
      title="Things I’ve built"
      description="Each project below is a short story — the problem, what I decided, the trade-offs I made, and how it turned out."
    >
      <div className="space-y-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block rounded-xl border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-muted)]/40 hover:bg-[var(--bg-muted)] p-6 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <h2 className="font-display text-xl font-bold text-[var(--fg-soft)] group-hover:text-[var(--accent)] transition-colors">
                {p.frontmatter.title}
              </h2>
              <span className="text-sm text-[var(--faint)]">
                {formatDate(p.frontmatter.date)}
              </span>
            </div>
            <p className="text-base text-[var(--muted)] mt-2 leading-relaxed">
              {p.frontmatter.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.frontmatter.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-[var(--fg-soft)] bg-[var(--bg)] border border-[var(--border)] px-2 py-0.5 rounded"
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

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso.slice(0, 10);
  }
}
