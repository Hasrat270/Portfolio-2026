export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
  },
  {
    label: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Gatsby",
      "Remix",
      "Node.js",
      "Express",
    ],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "Firebase", "Supabase"],
  },
  {
    label: "Tools & infra",
    items: [
      "Git",
      "VS Code",
      "Postman",
      "Tailwind CSS",
      "Linux",
      "Docker",
    ],
  },
];
