export const SITE = {
  name: "Hasrat Afridi",
  role: "Full-Stack Developer",
  description:
    "Personal portfolio of Hasrat Afridi — full-stack developer from Karachi building modern web applications with the MERN stack. Explore projects, experience, and writing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "Hasratkhan270@gmail.com",
  // International format (no plus, no spaces) for wa.me links.
  // 92 = Pakistan, 3082841437 = number.
  whatsapp: "923082841437",
  twitter: "@Hasrat09042872",
  github: "Hasrat270",
  keywords: [
    "Hasrat",
    "Hasrat Afridi",
    "portfolio",
    "developer",
    "full-stack",
    "MERN stack",
    "Next.js",
    "TypeScript",
    "React",
    "Karachi",
    "Pakistan",
  ],
  socials: {
    github: "https://github.com/Hasrat270",
    linkedin: "https://www.linkedin.com/in/hasrat3701",
    x: "https://x.com/Hasrat09042872",
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
