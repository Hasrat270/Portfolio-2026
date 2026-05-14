import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import MDXRender from "@/components/MDXRender";
import { getAbout } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "About Hasrat — full-stack developer building modern web apps.",
};

export default function AboutPage() {
  const { content } = getAbout();
  return (
    <PageShell command="cat about.md" title="about">
      <MDXRender source={content} />
    </PageShell>
  );
}
