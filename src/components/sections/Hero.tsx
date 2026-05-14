import Terminal from "@/components/terminal/Terminal";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-5xl px-4 sm:px-6 pt-10 md:pt-16 pb-12"
    >
      <div className="mb-6 md:mb-8">
        <p className="text-[var(--term-faint)] text-sm font-mono">
          <span className="text-[var(--term-prompt)]">$</span> cat intro.md
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl font-bold text-[var(--term-fg)] leading-[1.1] tracking-tight">
          hi, I&apos;m{" "}
          <span className="text-[var(--term-prompt)]">{SITE.name}</span>
          <span className="caret" />
        </h1>
        <p className="mt-4 text-[var(--term-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
          {SITE.role} building modern web applications end-to-end. TypeScript,
          Next.js, Node.js, PostgreSQL. Available for freelance & full-time
          work.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link
            href="/projects"
            className="text-[var(--term-prompt)] hover:text-[var(--term-accent)] border border-[var(--term-prompt)]/60 px-3 py-1.5 rounded transition-colors"
          >
            → see projects
          </Link>
          <Link
            href="/contact"
            className="text-[var(--term-accent)] hover:text-[var(--term-prompt)] border border-[var(--term-border)] hover:border-[var(--term-accent)] px-3 py-1.5 rounded transition-colors"
          >
            → get in touch
          </Link>
          <a
            href={SITE.resumeUrl}
            className="text-[var(--term-muted)] hover:text-[var(--term-fg)] border border-[var(--term-border)] hover:border-[var(--term-muted)] px-3 py-1.5 rounded transition-colors"
          >
            → resume.pdf
          </a>
        </div>
      </div>
      <Terminal />
      <p className="text-xs text-[var(--term-muted)] mt-3">
        ↑ This is a real interactive shell. Try{" "}
        <code className="text-[var(--term-accent)]">help</code> or{" "}
        <code className="text-[var(--term-accent)]">projects</code>.
      </p>
    </section>
  );
}
