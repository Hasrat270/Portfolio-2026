import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-[var(--term-border)] bg-[var(--term-bg)]/80 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group font-mono">
          <span className="text-[var(--term-prompt)]">~</span>
          <span className="text-[var(--term-faint)]">/</span>
          <span className="text-[var(--term-fg)] font-semibold group-hover:text-[var(--term-accent)] transition-colors">
            {SITE.handle}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-mono">
          {SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--term-fg)] hover:text-[var(--term-accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.resumeUrl}
            className="text-[var(--term-prompt)] hover:text-[var(--term-bg)] hover:bg-[var(--term-prompt)] border border-[var(--term-prompt)] px-3 py-1 rounded transition-colors font-semibold"
          >
            resume.pdf
          </a>
        </nav>
        <a
          href={SITE.resumeUrl}
          className="md:hidden text-[var(--term-prompt)] text-sm font-mono font-semibold border border-[var(--term-prompt)] px-3 py-1 rounded"
        >
          resume
        </a>
      </div>
    </header>
  );
}
