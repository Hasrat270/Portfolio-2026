import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import MDXRender from "@/components/MDXRender";
import { getNow } from "@/lib/content";

export const metadata: Metadata = {
  title: "Now",
  description: "What I’m focused on right now.",
};

export default function NowPage() {
  const { frontmatter, content } = getNow();
  return (
    <PageShell
      eyebrow={`Updated ${formatDate(frontmatter.updated)}`}
      title="What I’m up to"
      description="A short, honest snapshot of what I’m focused on right now."
    >
      <MDXRender source={content} />
    </PageShell>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
