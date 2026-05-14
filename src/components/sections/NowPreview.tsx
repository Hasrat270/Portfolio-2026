import Link from "next/link";
import { getNow } from "@/lib/content";

export default function NowPreview() {
  const { frontmatter } = getNow();
  return (
    <section
      id="now"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-16 border-t border-[var(--border)]"
    >
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)] p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--success)]">
            Right now
          </span>
          <span className="text-sm text-[var(--faint)]">
            · updated {formatDate(frontmatter.updated)}
          </span>
        </div>
        <p className="font-display text-xl md:text-2xl text-[var(--fg-soft)] leading-snug">
          Rebuilding this site, reading a book on data systems, and slowly
          shipping a side project that’s starting to feel real.
        </p>
        <Link
          href="/now"
          className="inline-block mt-5 font-semibold text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          What I’m up to →
        </Link>
      </div>
    </section>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
