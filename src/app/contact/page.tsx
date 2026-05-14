import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hasrat — email, socials, or contact form.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-12">
        <Link
          href="/"
          className="text-sm text-[var(--term-muted)] hover:text-[var(--term-accent)]"
        >
          ← cd ..
        </Link>
      </div>
      <Contact />
    </div>
  );
}
