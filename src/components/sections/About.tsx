import Link from "next/link";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-16 border-t border-[var(--border)]"
    >
      <SectionHeading eyebrow="About" title="A bit about me" />
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] items-start">
        <div className="space-y-5 text-[var(--fg)] text-lg leading-relaxed">
          <p>
            I’m a developer who likes making things that feel obvious to use.
            For the last few years I’ve been helping founders and small teams
            turn rough ideas into proper, working products — online stores,
            internal tools, dashboards, the occasional weekend experiment.
          </p>
          <p>
            I care about the small stuff: clear words, fast pages, buttons that
            do what you expect, and code that the next person can actually read.
            I’d rather ship a small thing that works than a big thing that
            almost does.
          </p>
          <p>
            When I’m not coding, I’m usually reading, tinkering with a side
            project, or trying to convince myself that this time I’ll finish the
            book.
          </p>
          <p>
            <Link
              href="/about"
              className="font-semibold text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              Read the longer version →
            </Link>
          </p>
        </div>
        <aside className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/50 p-6 space-y-4">
          <Stat label="Based in" value="Remote · Available worldwide" />
          <Stat label="Open to" value="Freelance & full-time roles" />
          <Stat label="Reply time" value="Within 2 days" />
        </aside>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-[var(--faint)]">
        {label}
      </div>
      <div className="mt-1 text-base text-[var(--fg-soft)] font-medium">
        {value}
      </div>
    </div>
  );
}
