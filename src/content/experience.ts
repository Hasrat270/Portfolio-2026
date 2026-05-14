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
    role: "Full-stack developer",
    period: "2024 — Present",
    location: "Remote",
    bullets: [
      "Building production websites and web apps for founders and small teams.",
      "Shipped admin dashboards, online stores, payment flows, and login systems from scratch.",
      "Owning the whole project — from the first conversation to the live URL.",
    ],
  },
  {
    company: "Personal projects",
    role: "Builder",
    period: "2023 — 2024",
    bullets: [
      "Shipped an online electronics store with a custom admin panel.",
      "Built a multi-tenant SaaS platform exploring teams, roles, and Stripe billing.",
      "Wrote a school management tool covering attendance, grades, and parent comms.",
    ],
  },
];
