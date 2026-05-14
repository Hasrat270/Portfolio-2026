import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24 bg-[var(--bg-muted)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="text-[15px] text-[var(--muted)]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[var(--fg-soft)] font-semibold">
              {SITE.name}
            </span>
            . Made with care.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[15px]">
            <a
              href={`mailto:${SITE.email}`}
              className="text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              Email
            </a>
            <a
              href={SITE.socials.github}
              className="text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={SITE.socials.linkedin}
              className="text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={SITE.socials.x}
              className="text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
