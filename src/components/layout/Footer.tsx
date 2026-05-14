import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--term-border)] mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 text-sm">
        <div className="text-[var(--term-faint)] font-mono mb-5 select-none">
          ─── eof ───
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-[var(--term-muted)]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[var(--term-fg)] font-semibold">
              {SITE.name}
            </span>
            . built with curiosity & caffeine.
          </div>
          <div className="flex flex-wrap items-center gap-5 font-mono">
            <a
              href={`mailto:${SITE.email}`}
              className="text-[var(--term-fg)] hover:text-[var(--term-accent)]"
            >
              email
            </a>
            <a
              href={SITE.socials.github}
              className="text-[var(--term-fg)] hover:text-[var(--term-accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href={SITE.socials.linkedin}
              className="text-[var(--term-fg)] hover:text-[var(--term-accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href={SITE.socials.x}
              className="text-[var(--term-fg)] hover:text-[var(--term-accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
