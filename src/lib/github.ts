import { SITE } from "./site";

export type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
};

export type GitHubRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
};

const headers: HeadersInit = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : {};

async function gh<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`https://api.github.com${endpoint}`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGitHubUser(): Promise<GitHubUser | null> {
  return gh<GitHubUser>(`/users/${SITE.github}`);
}

export async function getTopRepos(limit = 6): Promise<GitHubRepo[]> {
  const repos = await gh<GitHubRepo[]>(
    `/users/${SITE.github}/repos?sort=updated&per_page=100`,
  );
  if (!repos) return [];
  return repos
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, limit);
}
