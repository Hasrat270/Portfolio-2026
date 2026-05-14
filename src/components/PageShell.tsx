import Link from "next/link";

export default function PageShell({
  eyebrow,
  title,
  description,
  back = "/",
  backLabel = "Back home",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  back?: string;
  backLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 md:py-16">
      <Link
        href={back}
        className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] inline-flex items-center gap-1.5"
      >
        <span aria-hidden="true">←</span> {backLabel}
      </Link>
      <div className="mt-8">
        {eyebrow && (
          <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display mt-2 text-4xl md:text-5xl font-bold text-[var(--fg-soft)] tracking-tight leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-[var(--muted)] text-base md:text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
}
