export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  link?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2024 — Present",
    location: "Remote",
    bullets: [
      "Building production web applications with Next.js, TypeScript, and PostgreSQL for clients across e-commerce and SaaS.",
      "Designed and shipped admin dashboards, payment integrations, and auth flows from scratch.",
      "Owned end-to-end delivery: discovery, architecture, implementation, and deployment.",
    ],
  },
  {
    company: "Personal Projects",
    role: "Builder",
    period: "2023 — 2024",
    bullets: [
      "Shipped an e-commerce platform with Next.js + Node.js admin dashboard.",
      "Built a SaaS platform exploring multi-tenant architecture and Stripe billing.",
      "Authored a school management system covering attendance, grades, and parent comms.",
    ],
  },
];
