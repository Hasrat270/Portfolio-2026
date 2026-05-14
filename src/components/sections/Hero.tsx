import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-5 sm:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
      <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
        Hello there
      </p>
      <h1 className="font-display mt-3 text-5xl md:text-6xl font-bold text-[var(--fg-soft)] leading-[1.05] tracking-tight">
        I&apos;m {SITE.name} — I build websites <br className="hidden md:block" />
        and software that solve real problems.
      </h1>
      <p className="mt-6 text-[var(--muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
        I work with founders and teams to turn ideas into clean, fast products
        people actually want to use. From the first sketch to the live site —
        design, code, and everything in between.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--bg)] font-semibold px-5 py-2.5 rounded-md transition-colors"
        >
          See my work
          <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-[var(--border-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--fg-soft)] font-semibold px-5 py-2.5 rounded-md transition-colors"
        >
          Get in touch
        </Link>
        <a
          href={SITE.resumeUrl}
          className="inline-flex items-center gap-2 text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2 font-semibold px-2 py-2.5"
        >
          Download résumé
        </a>
      </div>
    </section>
  );
}
