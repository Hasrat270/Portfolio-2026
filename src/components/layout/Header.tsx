import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-[var(--term-border)] bg-[var(--term-bg)]/80 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-[var(--term-prompt)]">~</span>
          <span className="text-[var(--term-muted)]">/</span>
          <span className="text-[var(--term-fg)] group-hover:text-[var(--term-accent)] transition-colors">
            {SITE.handle}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--term-muted)] hover:text-[var(--term-fg)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.resumeUrl}
            className="text-[var(--term-prompt)] hover:text-[var(--term-accent)] border border-[var(--term-border)] hover:border-[var(--term-prompt)] px-3 py-1 rounded transition-colors"
          >
            resume.pdf
          </a>
        </nav>
        <a
          href={SITE.resumeUrl}
          className="md:hidden text-[var(--term-prompt)] text-sm border border-[var(--term-border)] px-3 py-1 rounded"
        >
          resume
        </a>
      </div>
    </header>
  );
}
