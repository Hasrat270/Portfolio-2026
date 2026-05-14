import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hasrat — email, socials, or a quick form.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-12">
        <Link
          href="/"
          className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1.5"
        >
          <span aria-hidden="true">←</span> Back home
        </Link>
      </div>
      <Contact />
    </div>
  );
}
