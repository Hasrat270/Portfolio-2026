import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { ProjectFrontmatter, NowFrontmatter } from "./schema";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

function readMdx(relativePath: string) {
  const full = path.join(CONTENT_DIR, relativePath);
  const raw = fs.readFileSync(full, "utf8");
  return matter(raw);
}

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};

export function getAllProjects(): Project[] {
  const dir = path.join(CONTENT_DIR, "projects");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const projects: Project[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { data, content } = readMdx(`projects/${file}`);
    const frontmatter = ProjectFrontmatter.parse(data);
    return { slug, frontmatter, content };
  });
  return projects.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1,
  );
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const { data, content } = readMdx(`projects/${slug}.mdx`);
    const frontmatter = ProjectFrontmatter.parse(data);
    return { slug, frontmatter, content };
  } catch {
    return null;
  }
}

export function getAbout(): { content: string } {
  const { content } = readMdx("about.mdx");
  return { content };
}

export function getNow(): { frontmatter: NowFrontmatter; content: string } {
  const { data, content } = readMdx("now.mdx");
  return { frontmatter: NowFrontmatter.parse(data), content };
}
