export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hasrat shipped fast and kept us in the loop the whole way. The dashboard he built replaced three of our internal tools in one go.",
    author: "Placeholder Client",
    role: "Founder",
    company: "Stealth startup",
  },
  {
    quote:
      "Strong product instincts, not just code. He pushed back on the brief where it needed pushing — and the result was better for it.",
    author: "Placeholder Lead",
    role: "Engineering lead",
    company: "Acme Co.",
  },
];
