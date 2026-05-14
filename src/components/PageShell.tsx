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
        className="text-sm font-mono text-[var(--term-faint)] hover:text-[var(--term-accent)]"
      >
        ← cd ..
      </Link>
      <div className="mt-8">
        <p className="text-sm font-mono text-[var(--term-faint)]">
          <span className="text-[var(--term-prompt)]">$</span> {command}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-[var(--term-fg)] tracking-tight">
          <span className="text-[var(--term-faint)] font-mono font-normal">
            #{" "}
          </span>
          {title}
        </h1>
        {description && (
          <p className="text-[var(--term-muted)] mt-3 max-w-2xl text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
}
