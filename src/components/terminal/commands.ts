import type { ReactNode } from "react";
import { listDir, normalizePath } from "./filesystem";
import { SITE } from "@/lib/site";
import { skillGroups } from "@/content/skills";
import { experience } from "@/content/experience";

export type CommandContext = {
  cwd: string;
  setCwd: (path: string) => void;
  clear: () => void;
  navigate: (href: string) => void;
  print: (node: ReactNode) => void;
  setTheme: (name: string) => void;
};

export type Command = {
  name: string;
  description: string;
  run: (args: string[], ctx: CommandContext) => ReactNode | void;
};

const projects = [
  { slug: "electronics-ecommerce", title: "Electronics E-Commerce Platform" },
  { slug: "saas-platform", title: "Multi-Tenant SaaS Platform" },
  { slug: "school-app", title: "School Management System" },
];

const fileContent: Record<string, string> = {
  "about.md": `Hasrat — full-stack developer.
Builds with TypeScript, Next.js, Node.js, PostgreSQL.
Type 'open /about' to read the full version.`,
  "contact.md": `email:    ${SITE.email}
github:   ${SITE.socials.github}
linkedin: ${SITE.socials.linkedin}
x:        ${SITE.socials.x}`,
  "now.md": `Currently rebuilding this portfolio.
Run 'open /now' to read more.`,
  "skills.txt": skillGroups
    .map((g) => `${g.label.padEnd(12)} ${g.items.join(", ")}`)
    .join("\n"),
};

export const commands: Command[] = [
  {
    name: "help",
    description: "list available commands",
    run: () =>
      "Available commands:\n" +
      commands
        .map((c) => `  ${c.name.padEnd(10)} — ${c.description}`)
        .join("\n") +
      "\n\nTip: try 'ls', 'projects', 'open about', 'resume'.",
  },
  {
    name: "ls",
    description: "list directory contents",
    run: (args, ctx) => {
      const target = args[0] ? normalizePath(ctx.cwd, args[0]) : ctx.cwd;
      const entries = listDir(target);
      if (!entries) return `ls: ${target}: no such directory`;
      return entries
        .map((e) =>
          e.type === "dir"
            ? `\x1b[blue]${e.name}/\x1b[/]`
            : `\x1b[fg]${e.name}\x1b[/]`,
        )
        .join("  ");
    },
  },
  {
    name: "cd",
    description: "change directory",
    run: (args, ctx) => {
      const target = normalizePath(ctx.cwd, args[0] || "~");
      if (!listDir(target)) return `cd: ${target}: no such directory`;
      ctx.setCwd(target);
      return null;
    },
  },
  {
    name: "pwd",
    description: "print working directory",
    run: (_a, ctx) => ctx.cwd,
  },
  {
    name: "cat",
    description: "print file contents",
    run: (args) => {
      const file = args[0];
      if (!file) return "cat: missing operand";
      const base = file.replace(/^.*\//, "");
      if (fileContent[base]) return fileContent[base];
      const projectMatch = projects.find(
        (p) => `${p.slug}.md` === base || p.slug === base,
      );
      if (projectMatch) {
        return `${projectMatch.title}\nRun 'open ${projectMatch.slug}' for the full case study.`;
      }
      return `cat: ${file}: no such file`;
    },
  },
  {
    name: "projects",
    description: "list featured projects",
    run: () =>
      "Featured projects:\n" +
      projects
        .map((p) => `  ▸ ${p.slug.padEnd(28)} ${p.title}`)
        .join("\n") +
      "\n\nRun 'open <slug>' to read the case study.",
  },
  {
    name: "open",
    description: "open a page (about | projects | <slug> | now | contact)",
    run: (args, ctx) => {
      const target = args[0];
      if (!target) return "open: missing target";
      const clean = target.replace(/^\/+/, "").replace(/\.md$/, "");
      const project = projects.find((p) => p.slug === clean);
      if (project) {
        ctx.navigate(`/projects/${project.slug}`);
        return `→ opening /projects/${project.slug}`;
      }
      const routes = ["about", "projects", "experience", "contact", "now"];
      if (routes.includes(clean)) {
        ctx.navigate(`/${clean}`);
        return `→ opening /${clean}`;
      }
      return `open: unknown target '${target}'`;
    },
  },
  {
    name: "skills",
    description: "show skills & tools",
    run: () =>
      skillGroups
        .map(
          (g) =>
            `\x1b[accent]${g.label}\x1b[/]\n  ${g.items.join("  ·  ")}`,
        )
        .join("\n\n"),
  },
  {
    name: "experience",
    description: "show work experience",
    run: () =>
      experience
        .map(
          (e) =>
            `\x1b[accent]${e.role}\x1b[/]  @ ${e.company}  \x1b[muted](${e.period})\x1b[/]\n` +
            e.bullets.map((b) => `  ▸ ${b}`).join("\n"),
        )
        .join("\n\n"),
  },
  {
    name: "now",
    description: "what I'm doing now",
    run: () =>
      "Rebuilding this portfolio + a SaaS side project.\nRun 'open now' for the full /now page.",
  },
  {
    name: "contact",
    description: "show contact info",
    run: () => fileContent["contact.md"],
  },
  {
    name: "resume",
    description: "download resume.pdf",
    run: (_a, ctx) => {
      if (typeof window !== "undefined") {
        window.open(SITE.resumeUrl, "_blank");
      }
      ctx.navigate(SITE.resumeUrl);
      return "→ opening resume.pdf";
    },
  },
  {
    name: "github",
    description: "open GitHub profile",
    run: () => {
      if (typeof window !== "undefined") {
        window.open(SITE.socials.github, "_blank");
      }
      return `→ ${SITE.socials.github}`;
    },
  },
  {
    name: "whoami",
    description: "short bio",
    run: () => `${SITE.handle} — ${SITE.role}. Building things on the web.`,
  },
  {
    name: "theme",
    description: "toggle theme (crt | default)",
    run: (args, ctx) => {
      const name = args[0] || "default";
      ctx.setTheme(name);
      return `theme set to '${name}'`;
    },
  },
  {
    name: "clear",
    description: "clear the terminal",
    run: (_a, ctx) => {
      ctx.clear();
      return null;
    },
  },
  {
    name: "echo",
    description: "print arguments",
    run: (args) => args.join(" "),
  },
];

export function findCommand(name: string): Command | undefined {
  return commands.find((c) => c.name === name);
}

export function commandNames(): string[] {
  return commands.map((c) => c.name);
}
