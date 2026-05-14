import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import MDXRender from "@/components/MDXRender";
import { getAbout } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about Hasrat — what I do, how I work, who I am.",
};

export default function AboutPage() {
  const { content } = getAbout();
  return (
    <PageShell
      eyebrow="About"
      title="A bit about me"
      description="The long version — what I do, how I think about work, and what I’m looking for next."
    >
      <MDXRender source={content} />
    </PageShell>
  );
}
