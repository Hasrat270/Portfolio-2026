import Link from "next/link";
import { SITE } from "@/lib/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg sm:text-xl font-bold text-[var(--fg-soft)] hover:text-[var(--accent)] transition-colors truncate"
        >
          {SITE.name}
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[15px]">
          {SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors capitalize"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.resumeUrl}
            className="text-[var(--bg)] bg-[var(--accent)] hover:bg-[var(--accent-strong)] px-4 py-1.5 rounded-md font-semibold transition-colors"
          >
            Résumé
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
