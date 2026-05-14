import SectionHeading from "./SectionHeading";
import { getGitHubUser, getTopRepos } from "@/lib/github";
import { SITE } from "@/lib/site";

export default async function GitHubStats() {
  const [user, repos] = await Promise.all([getGitHubUser(), getTopRepos(6)]);

  if (!user) {
    return (
      <section
        id="github"
        className="mx-auto max-w-4xl px-5 sm:px-8 py-16 border-t border-[var(--border)]"
      >
        <SectionHeading
          eyebrow="Open source"
          title="On GitHub"
          description="My GitHub activity is currently unavailable. You can find my work at the link below."
        />
        <a
          href={SITE.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 font-semibold"
        >
          Visit my GitHub profile →
        </a>
      </section>
    );
  }

  return (
    <section
      id="github"
      className="mx-auto max-w-4xl px-5 sm:px-8 py-16 border-t border-[var(--border)]"
    >
      <SectionHeading
        eyebrow="Open source"
        title="On GitHub"
        description="A live look at what I’m sharing publicly. Updated every hour."
      />
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <Stat label="Public repos" value={user.public_repos} />
        <Stat label="Followers" value={user.followers} />
        <Stat label="Following" value={user.following} />
      </div>
      {repos.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {repos.map((r) => (
            <a
              key={r.full_name}
              href={r.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-muted)]/40 hover:bg-[var(--bg-muted)] p-5 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-display text-lg font-bold text-[var(--fg-soft)] truncate">
                  {r.name}
                </h4>
                <span className="text-sm text-[var(--muted)] whitespace-nowrap">
                  ★ {r.stargazers_count}
                </span>
              </div>
              {r.description && (
                <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed line-clamp-2">
                  {r.description}
                </p>
              )}
              {r.language && (
                <span className="inline-block text-xs font-semibold text-[var(--accent)] mt-3">
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
        className="inline-block mt-8 text-[15px] font-semibold text-[var(--link)] hover:text-[var(--link-hover)] underline underline-offset-4 decoration-1 hover:decoration-2"
      >
        See full profile →
      </a>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)]/50 p-5">
      <div className="font-display text-3xl font-bold text-[var(--fg-soft)]">
        {value}
      </div>
      <div className="text-sm text-[var(--muted)] mt-1">{label}</div>
    </div>
  );
}
