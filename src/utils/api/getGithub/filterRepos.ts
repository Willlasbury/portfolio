import Repository from "@/utils/types/githubRepos";

export default function filterRepos(repos: Repository[]): Repository[] {
  const inactive: Repository[] = []
  const active: Repository[] = []
  let i = 0;
  while (i < repos.length) {
    if (repos[i].topics.includes('inactive')) {
      inactive.push(repos[i]);
    }
    if (repos[i].topics.includes('active')) {
      active.push(repos[i]);
    }
    i++;

  }
  return active.concat(inactive);
}
