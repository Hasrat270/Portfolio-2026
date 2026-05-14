import SectionHeading from "./SectionHeading";
import { getGitHubUser, getTopRepos } from "@/lib/github";
import { SITE } from "@/lib/site";

export default async function GitHubStats() {
  const [user, repos] = await Promise.all([getGitHubUser(), getTopRepos(6)]);

  if (!user) {
    return (
      <section
        id="github"
        className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
      >
        <SectionHeading
          command="curl api.github.com"
          title="open source"
          description="GitHub stats are currently unavailable. Visit my profile directly."
        />
        <a
          href={SITE.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--term-accent)] hover:text-[var(--term-prompt)]"
        >
          → {SITE.socials.github}
        </a>
      </section>
    );
  }

  return (
    <section
      id="github"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-[var(--term-border)]"
    >
      <SectionHeading
        command={`curl github.com/${user.login}`}
        title="open source"
        description="Public repos & GitHub activity. Updated hourly."
      />
      <div className="grid gap-3 md:grid-cols-3 mb-6">
        <Stat label="public repos" value={user.public_repos} />
        <Stat label="followers" value={user.followers} />
        <Stat label="following" value={user.following} />
      </div>
      {repos.length > 0 && (
        <div className="grid gap-3 md:grid-cols-2">
          {repos.map((r) => (
            <a
              key={r.full_name}
              href={r.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded border border-[var(--term-border)] hover:border-[var(--term-prompt)] bg-[var(--term-surface)] p-4 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="text-[var(--term-accent)] font-bold text-base truncate">
                  {r.name}
                </h4>
                <span className="text-sm font-mono text-[var(--term-muted)] whitespace-nowrap">
                  ★ {r.stargazers_count}
                </span>
              </div>
              {r.description && (
                <p className="text-sm text-[var(--term-muted)] mt-1.5 leading-relaxed line-clamp-2">
                  {r.description}
                </p>
              )}
              {r.language && (
                <span className="inline-block text-xs font-mono uppercase tracking-wider text-[var(--term-prompt)] mt-3">
                  {r.language}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-sm text-[var(--term-accent)] hover:text-[var(--term-prompt)]"
      >
        → view full profile
      </a>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded border border-[var(--term-border)] bg-[var(--term-surface)] p-4">
      <div className="text-2xl font-semibold text-[var(--term-prompt)] font-mono">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-[var(--term-muted)] mt-1">
        {label}
      </div>
    </div>
  );
}
