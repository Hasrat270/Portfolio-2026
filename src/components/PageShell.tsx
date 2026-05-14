import Link from "next/link";

export default function PageShell({
  command,
  title,
  description,
  back = "/",
  children,
}: {
  command: string;
  title: string;
  description?: string;
  back?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Link
        href={back}
        className="text-sm text-[var(--term-muted)] hover:text-[var(--term-accent)]"
      >
        ← cd ..
      </Link>
      <div className="mt-6">
        <p className="text-sm font-mono text-[var(--term-muted)]">
          <span className="text-[var(--term-prompt)]">$</span> {command}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-1 text-[var(--term-fg)]">
          <span className="text-[var(--term-muted)]"># </span>
          {title}
        </h1>
        {description && (
          <p className="text-[var(--term-muted)] mt-2 max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
