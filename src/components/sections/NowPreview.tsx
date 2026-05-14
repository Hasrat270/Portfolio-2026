import Link from "next/link";
import { getNow } from "@/lib/content";

export default function NowPreview() {
  const { frontmatter } = getNow();
  return (
    <section
      id="now"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
    >
      <div className="rounded-lg border border-[var(--term-border-strong)] bg-[var(--term-surface)] p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[var(--term-prompt)] animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--term-prompt)]">
            now
          </span>
          <span className="text-xs font-mono text-[var(--term-faint)]">
            · last updated {frontmatter.updated}
          </span>
        </div>
        <p className="text-[var(--term-fg)] text-base md:text-lg leading-relaxed">
          Rebuilding this portfolio with an interactive terminal hero. Reading
          DDIA. Working on a SaaS side-project.
        </p>
        <Link
          href="/now"
          className="inline-block mt-4 text-sm font-semibold text-[var(--term-link)] hover:text-[var(--term-prompt)]"
        >
          → read more on /now
        </Link>
      </div>
    </section>
  );
}
