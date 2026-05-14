import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import MDXRender from "@/components/MDXRender";
import { getNow } from "@/lib/content";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm doing right now.",
};

export default function NowPage() {
  const { frontmatter, content } = getNow();
  return (
    <PageShell
      command="cat now.md"
      title="now"
      description={`What I'm focused on right now. Last updated ${frontmatter.updated}.`}
    >
      <MDXRender source={content} />
    </PageShell>
  );
}
