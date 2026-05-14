import { z } from "zod";

export const ProjectFrontmatter = z.object({
  title: z.string(),
  summary: z.string(),
  problem: z.string(),
  role: z.string(),
  date: z.string(),
  tech: z.array(z.string()),
  cover: z.string().optional(),
  links: z
    .object({
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
    })
    .optional(),
  featured: z.boolean().default(false),
});

export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatter>;

export const NowFrontmatter = z.object({
  updated: z.string(),
});

export type NowFrontmatter = z.infer<typeof NowFrontmatter>;

export const AboutFrontmatter = z.object({
  title: z.string().optional(),
});
