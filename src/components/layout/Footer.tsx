import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16 sm:mt-24 bg-[var(--bg-muted)] text-center sm:text-left">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-10 sm:py-12">
        {/* Top: brand + quick links */}
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] mb-8 md:mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-bold text-[var(--fg-soft)] tracking-tight">
              {SITE.name}
            </p>
            <p className="mt-2 text-[15px] text-[var(--muted)] leading-relaxed max-w-sm mx-auto sm:mx-0">
              {SITE.role} based in Karachi, Pakistan. Available for freelance
              and full-time work.
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <SocialLink
                href={`mailto:${SITE.email}`}
                label="Email"
                icon={<MailIcon />}
              />
              <SocialLink
                href={SITE.socials.github}
                label="GitHub"
                icon={<GitHubIcon />}
                external
              />
              <SocialLink
                href={SITE.socials.linkedin}
                label="LinkedIn"
                icon={<LinkedInIcon />}
                external
              />
              <SocialLink
                href={SITE.socials.x}
                label="X (Twitter)"
                icon={<TwitterIcon />}
                external
              />
            </ul>
          </div>

          <FooterColumn
            title="Explore"
            links={[
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Experience", href: "/experience" },
              { label: "Now", href: "/now" },
            ]}
          />

          <FooterColumn
            title="Connect"
            links={[
              { label: "Contact", href: "/contact" },
              { label: "Résumé", href: SITE.resumeUrl },
              { label: "Email", href: `mailto:${SITE.email}` },
            ]}
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-xs sm:text-sm text-[var(--faint)]">
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p>Designed &amp; built from Karachi, Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--faint)] mb-4">
        {title}
      </h2>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[15px] text-[var(--fg-soft)] hover:text-[var(--accent)] transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        aria-label={label}
        title={label}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border-strong)] text-[var(--fg-soft)] hover:text-[var(--bg)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors"
      >
        {icon}
      </a>
    </li>
  );
}

/* ---------- inline SVG icons (Lucide-style, currentColor) ---------- */

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.21.67.8.56C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.78l-5.31-6.94L4.8 22H1.54l8.02-9.17L1 2h6.92l4.79 6.33L18.244 2Zm-1.19 18.1h1.8L7.05 3.78H5.13l11.92 16.32Z" />
    </svg>
  );
}
