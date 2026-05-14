export const SITE = {
  name: "Hasrat",
  handle: "hasrat",
  role: "Full-Stack Developer",
  description:
    "Personal portfolio of Hasrat — full-stack developer building modern web applications. Explore projects, experience, and writing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hasrat.dev",
  email: "zerovlabs18@gmail.com",
  twitter: "@hasrat270",
  github: "Hasrat270",
  keywords: [
    "Hasrat",
    "portfolio",
    "developer",
    "full-stack",
    "Next.js",
    "TypeScript",
    "React",
  ],
  socials: {
    github: "https://github.com/Hasrat270",
    linkedin: "https://www.linkedin.com/in/hasrat270",
    x: "https://x.com/hasrat270",
  },
  nav: [
    { label: "about", href: "/about" },
    { label: "projects", href: "/projects" },
    { label: "experience", href: "/experience" },
    { label: "now", href: "/now" },
    { label: "contact", href: "/contact" },
  ],
  resumeUrl: "/resume/hasrat-resume.pdf",
} as const;
