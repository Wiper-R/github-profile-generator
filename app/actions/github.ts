export type GithubUserDetails = {
  avatar_url: string;
  html_url: string;
  url: string;
  name: string;
  location: string;
  followers: string;
  following: string;
  id: number;
  login: string;
};

type RepoData = {};

export async function fetchUserRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const json = await res.json();
  return json;
}

export async function fetchUserDetails(
  username: string
): Promise<GithubUserDetails> {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const json = await res.json();
  return json;
}
