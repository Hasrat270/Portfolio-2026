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
      eyebrow="Project"
      title={frontmatter.title}
      description={frontmatter.summary}
      back="/projects"
      backLabel="All projects"
    >
      <dl className="grid gap-4 sm:grid-cols-2 mb-8 rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/50 p-5 sm:p-6">
        <Meta label="The problem" value={frontmatter.problem} />
        <Meta label="My role" value={frontmatter.role} />
        <Meta label="When" value={formatDate(frontmatter.date)} />
        <div>
          <dt className="text-xs font-semibold uppercase tracking-widest text-[var(--faint)]">
            Built with
          </dt>
          <dd className="mt-1.5 flex flex-wrap gap-1.5">
            {frontmatter.tech.map((t) => (
              <span
                key={t}
                className="text-xs text-[var(--fg-soft)] bg-[var(--bg)] border border-[var(--border)] px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </dd>
        </div>
        {frontmatter.links && (
          <div className="sm:col-span-2 flex flex-wrap gap-5 pt-2 border-t border-[var(--border)]">
            {frontmatter.links.repo && (
              <Link
                href={frontmatter.links.repo}
                target="_blank"
                className="font-semibold text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
              >
                View code →
              </Link>
            )}
            {frontmatter.links.demo && (
              <Link
                href={frontmatter.links.demo}
                target="_blank"
                className="font-semibold text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
              >
                See it live →
              </Link>
            )}
          </div>
        )}
      </dl>
      <MDXRender source={content} />
    </PageShell>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-widest text-[var(--faint)]">
        {label}
      </dt>
      <dd className="mt-1.5 text-base text-[var(--fg-soft)]">{value}</dd>
    </div>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso.slice(0, 10);
  }
}
