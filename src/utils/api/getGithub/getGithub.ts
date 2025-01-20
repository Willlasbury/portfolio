import filterRepos from "./filterRepos";
import Repository from "@/utils/types/githubRepos";

const token = import.meta.env.GITHUBACCESSTOKEN

export default async function getGithub(): Promise<Array<Repository>> {
  try {
    const url = "https://api.github.com/users/willlasbury/repos";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        'Authorization': token
      }
    });

    if (res.ok) {
      const data = await res.json();
      // filter out repositories that don't have the 'portfolio' tag
      const repos = filterRepos(data);

      // use the languages_url to attach languages to repo
      
      return repos as Repository[]

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
