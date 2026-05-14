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
    <header className="mb-8">
      <div className="text-sm text-[var(--term-faint)] font-mono">
        <span className="text-[var(--term-prompt)]">$</span> {command}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--term-fg)] tracking-tight">
        <span className="text-[var(--term-faint)] font-mono font-normal">## </span>
        {title}
      </h2>
      {description && (
        <p className="text-[var(--term-muted)] mt-3 max-w-2xl text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
