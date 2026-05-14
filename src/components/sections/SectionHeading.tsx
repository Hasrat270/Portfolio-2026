export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10">
      {eyebrow && (
        <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display mt-2 text-3xl md:text-4xl font-bold text-[var(--fg-soft)] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[var(--muted)] text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}
