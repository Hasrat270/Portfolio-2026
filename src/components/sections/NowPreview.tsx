import Link from "next/link";
import { getNow } from "@/lib/content";

export default function NowPreview() {
  const { frontmatter } = getNow();
  return (
    <section
      id="now"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
    >
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[var(--term-prompt)] animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-[var(--term-prompt)]">
            now
          </span>
          <span className="text-xs text-[var(--term-muted)]">
            · last updated {frontmatter.updated}
          </span>
        </div>
        <p className="text-[var(--term-fg)]">
          Rebuilding this portfolio with an interactive terminal hero. Reading
          DDIA. Working on a SaaS side-project.
        </p>
        <Link
          href="/now"
          className="inline-block mt-3 text-sm text-[var(--term-accent)] hover:text-[var(--term-prompt)]"
        >
          → read more on /now
        </Link>
      </div>
    </section>
  );
}
