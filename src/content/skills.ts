export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "Bash"],
  },
  {
    label: "Frameworks",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "Tailwind CSS",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman", "Vitest", "Playwright"],
  },
  {
    label: "Infra",
    items: ["Docker", "Vercel", "AWS", "PostgreSQL", "Redis", "Linux"],
  },
];
