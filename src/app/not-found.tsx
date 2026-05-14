import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8 py-24 text-center">
      <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl md:text-5xl font-bold text-[var(--fg-soft)] tracking-tight">
        This page isn’t here.
      </h1>
      <p className="text-[var(--muted)] mt-4 text-lg leading-relaxed">
        The link might be old, or I might have moved things around. Either way —
        sorry about that.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--bg)] font-semibold px-5 py-2.5 rounded-md transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/projects"
          className="border border-[var(--border-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--fg-soft)] font-semibold px-5 py-2.5 rounded-md transition-colors"
        >
          See projects
        </Link>
      </div>
    </div>
  );
}
