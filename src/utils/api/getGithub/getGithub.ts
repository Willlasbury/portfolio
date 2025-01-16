import filterRepos from "./filterRepos";
import Repository from "@/utils/types/githubRepos";
import getRepoLanguages from "./getRepoLangs";
// import RepoLanguages from "@/utils/types/githubRepoLang";

export default async function getGithub(): Promise<Array<Repository>> {
  try {
    const url = "https://api.github.com/users/willlasbury/repos";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      // filter out repositories that don't have the 'portfolio' tag
      const repos = filterRepos(data);

      // use the languages_url to attach languages to repo
      repos.map(async (repo) => {
        const lan_data = await getRepoLanguages(repo.languages_url)
        
      })
    } else {
      throw new Error(`${res.statusText} ${await res.text()}`);
    }
  } catch (err) {
    if (err instanceof Error) {
      // TODO
      console.log(err);
    }
    return [];
  }
}
