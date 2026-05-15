import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Hero() {
  const firstName = SITE.name.split(" ")[0];
  return (
    <section className="min-h-[calc(100svh-4rem)] flex items-center">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 py-6 sm:py-10">
        <p className="text-xs sm:text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
          Hello there
        </p>
        <h1 className="font-display mt-2 sm:mt-3 text-[1.75rem] leading-[1.15] sm:text-5xl md:text-6xl md:leading-[1.05] font-bold text-[var(--fg-soft)] tracking-tight">
          I&apos;m {firstName} — I build websites{" "}
          <br className="hidden md:block" />
          and software that solve real problems.
        </h1>
        <p className="mt-3 sm:mt-6 text-[var(--muted)] text-[15px] sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          I work with founders and teams to turn ideas into clean, fast
          products people actually want to use. From the first sketch to the
          live site — design, code, and everything in between.
        </p>
        <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Primary — solid accent with depth */}
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--bg)] text-[15px] font-semibold h-11 sm:h-10 px-5 rounded-full shadow-[0_4px_14px_rgba(160,69,39,0.25)] hover:shadow-[0_6px_20px_rgba(160,69,39,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_rgba(160,69,39,0.2)] transition-all duration-200 w-full sm:w-auto"
          >
            See my work
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5 group-hover:bg-white/25"
            >
              →
            </span>
          </Link>

          {/* Secondary — ghost with hover fill */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 border border-[var(--border-strong)] hover:border-[var(--fg-soft)] text-[var(--fg-soft)] hover:bg-[var(--fg-soft)] hover:text-[var(--bg)] text-[15px] font-semibold h-11 sm:h-10 px-5 rounded-full transition-colors duration-200 w-full sm:w-auto"
          >
            Get in touch
          </Link>

          {/* Tertiary — quiet link with download icon.
              On mobile it becomes a third outlined pill button so the row reads
              consistently; on sm+ it goes back to its quieter inline style. */}
          <a
            href={SITE.resumeUrl}
            className="group inline-flex items-center justify-center gap-2 text-[var(--fg-soft)] sm:text-[var(--muted)] hover:text-[var(--accent)] text-[15px] font-semibold h-11 sm:h-12 w-full sm:w-auto px-5 sm:px-3 rounded-full sm:rounded-none border border-[var(--border-strong)] hover:border-[var(--accent)] sm:border-0 sm:hover:border-0 transition-colors"
          >
            <DownloadIcon />
            <span className="underline-offset-4 decoration-1 sm:group-hover:underline sm:group-hover:decoration-2">
              Download résumé
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform group-hover:translate-y-0.5"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
