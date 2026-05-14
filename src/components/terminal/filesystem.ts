export type FSEntry =
  | { type: "dir"; name: string }
  | { type: "file"; name: string };

export const VFS: Record<string, FSEntry[]> = {
  "~": [
    { type: "file", name: "about.md" },
    { type: "file", name: "contact.md" },
    { type: "file", name: "now.md" },
    { type: "dir", name: "projects" },
    { type: "dir", name: "experience" },
    { type: "file", name: "skills.txt" },
    { type: "file", name: "resume.pdf" },
  ],
  "~/projects": [
    { type: "file", name: "electronics-ecommerce.md" },
    { type: "file", name: "saas-platform.md" },
    { type: "file", name: "school-app.md" },
  ],
  "~/experience": [{ type: "file", name: "timeline.md" }],
};

export function listDir(path: string): FSEntry[] | null {
  return VFS[path] ?? null;
}

export function normalizePath(cwd: string, target: string): string {
  if (!target || target === ".") return cwd;
  if (target === "~" || target === "/") return "~";
  if (target === "..") {
    if (cwd === "~") return "~";
    const parts = cwd.split("/");
    parts.pop();
    return parts.length ? parts.join("/") : "~";
  }
  if (target.startsWith("~/") || target.startsWith("/")) {
    return target.startsWith("/") ? "~" + target : target;
  }
  return `${cwd}/${target}`.replace(/\/$/, "");
}
