import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const staticRoutes = ["", "/about", "/projects", "/experience", "/now", "/contact"];
  const projectRoutes = getAllProjects().map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(p.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: r === "" ? 1.0 : 0.8,
    })),
    ...projectRoutes,
  ];
}
