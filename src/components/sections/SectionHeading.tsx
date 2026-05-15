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
    <header className="mb-8 sm:mb-10">
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--fg-soft)] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[var(--muted)] text-[15px] sm:text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}
