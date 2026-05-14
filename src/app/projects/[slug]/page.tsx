import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import MDXRender from "@/components/MDXRender";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;
  return (
    <PageShell
      command={`cat ~/projects/${slug}.md`}
      title={frontmatter.title}
      description={frontmatter.summary}
      back="/projects"
    >
      <div className="mb-6 grid gap-2 text-sm">
        <Meta label="problem" value={frontmatter.problem} />
        <Meta label="role" value={frontmatter.role} />
        <Meta label="date" value={frontmatter.date.slice(0, 10)} />
        <div className="flex items-baseline gap-3">
          <span className="text-[var(--term-muted)] w-20 shrink-0">tech</span>
          <span className="flex flex-wrap gap-1.5">
            {frontmatter.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-wider text-[var(--term-accent)] border border-[var(--term-border)] px-1.5 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </span>
        </div>
        {frontmatter.links && (
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-[var(--term-muted)] w-20 shrink-0">links</span>
            <span className="flex flex-wrap gap-3">
              {frontmatter.links.repo && (
                <Link
                  href={frontmatter.links.repo}
                  target="_blank"
                  className="text-[var(--term-accent)] hover:text-[var(--term-prompt)]"
                >
                  → repo
                </Link>
              )}
              {frontmatter.links.demo && (
                <Link
                  href={frontmatter.links.demo}
                  target="_blank"
                  className="text-[var(--term-accent)] hover:text-[var(--term-prompt)]"
                >
                  → live demo
                </Link>
              )}
            </span>
          </div>
        )}
      </div>
      <hr className="border-dashed border-[var(--term-border)] my-6" />
      <MDXRender source={content} />
    </PageShell>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-[var(--term-muted)] w-20 shrink-0">{label}</span>
      <span className="text-[var(--term-fg)]">{value}</span>
    </div>
  );
}
