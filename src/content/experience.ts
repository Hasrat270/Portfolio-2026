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
    company: "Sapphire Consulting Services",
    role: "MERN Stack Web Developer",
    period: "Dec 2025 — Mar 2026",
    location: "Karachi",
    bullets: [
      "Developed and shipped web applications across both front-end and back-end of the MERN stack.",
      "Debugged and tuned existing features to improve application performance and user experience.",
      "Worked closely with the team to design and deliver solutions, contributing to a strong collaborative environment.",
    ],
  },
  {
    company: "The Algorithm PK",
    role: "Trainer",
    period: "Apr 2025 — Oct 2025",
    location: "DHA Phase 5, Karachi",
    bullets: [
      "Taught foundational programming to students — Python and JavaScript from the ground up.",
      "Designed and ran the curriculum for the AI-for-kids and web development tracks.",
      "Led hands-on labs covering MongoDB and SQL, helping students build real working projects.",
      "Created a supportive, beginner-friendly learning environment at the DHA Phase 5 campus.",
    ],
  },
  {
    company: "Artex Digital",
    role: "IT Support",
    period: "Feb 2024 — Feb 2025",
    location: "North Nazimabad, Karachi",
    bullets: [
      "Provided day-to-day IT support to over 180 employees, covering software, hardware, and networking.",
      "Triaged and resolved issues with the team to keep downtime to a minimum.",
      "Built strong communication skills working with people across very different technical backgrounds.",
    ],
  },
];
