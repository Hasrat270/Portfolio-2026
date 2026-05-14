export default function SectionHeading({
  command,
  title,
  description,
}: {
  command: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-6">
      <div className="text-sm text-[var(--term-muted)] font-mono">
        <span className="text-[var(--term-prompt)]">$</span> {command}
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mt-1 text-[var(--term-fg)]">
        <span className="text-[var(--term-muted)]">## </span>
        {title}
      </h2>
      {description && (
        <p className="text-[var(--term-muted)] mt-2 max-w-2xl">{description}</p>
      )}
    </header>
  );
}
