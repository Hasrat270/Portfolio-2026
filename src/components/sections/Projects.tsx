import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { getFeaturedProjects } from "@/lib/content";

export default function Projects() {
  const projects = getFeaturedProjects();
  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-16 border-t border-[var(--border)]"
    >
      <SectionHeading
        eyebrow="Selected work"
        title="Things I’ve built"
        description="A few projects I’m proud of. Each one started with a real problem — click through to see how it came together."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block rounded-xl border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-muted)]/40 hover:bg-[var(--bg-muted)] p-6 transition-colors shadow-sm hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-bold text-[var(--fg-soft)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                {p.frontmatter.title}
              </h3>
              <span className="text-xs text-[var(--faint)] whitespace-nowrap mt-1.5">
                {formatMonth(p.frontmatter.date)}
              </span>
            </div>
            <p className="text-base text-[var(--muted)] mt-3 leading-relaxed">
              {p.frontmatter.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.frontmatter.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="text-xs text-[var(--fg-soft)] bg-[var(--bg-deep)]/60 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 text-sm font-semibold text-[var(--accent)] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
              Read the story <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/projects"
          className="text-[15px] font-semibold text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          See all projects →
        </Link>
      </div>
    </section>
  );
}

function formatMonth(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch {
    return date.slice(0, 7);
  }
}
