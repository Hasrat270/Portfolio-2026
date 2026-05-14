import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 font-mono">
      <p className="text-[var(--term-danger)] text-sm">
        <span className="text-[var(--term-prompt)]">$</span> cd{" "}
        {typeof window === "undefined" ? "<requested-path>" : window.location.pathname}
      </p>
      <h1 className="text-5xl font-bold mt-3 text-[var(--term-fg)]">
        404
        <span className="text-[var(--term-muted)] text-2xl ml-3">
          no such file or directory
        </span>
      </h1>
      <p className="text-[var(--term-muted)] mt-4 max-w-xl">
        The path you tried doesn&apos;t exist. Maybe it was renamed, or maybe a
        link rotted. Either way — head back home.
      </p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          href="/"
          className="text-[var(--term-prompt)] border border-[var(--term-prompt)]/60 px-3 py-1.5 rounded"
        >
          → cd ~
        </Link>
        <Link
          href="/projects"
          className="text-[var(--term-accent)] border border-[var(--term-border)] px-3 py-1.5 rounded"
        >
          → ls projects
        </Link>
      </div>
    </div>
  );
}
