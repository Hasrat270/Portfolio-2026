export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hasrat shipped fast and communicated clearly the whole way. The dashboard he built replaced three internal tools.",
    author: "— Placeholder Client",
    role: "Founder",
    company: "Stealth Startup",
  },
  {
    quote:
      "Strong product instincts, not just code. He pushed back on the spec when it needed pushing and the result was better for it.",
    author: "— Placeholder Lead",
    role: "Engineering Lead",
    company: "Acme Co.",
  },
];
