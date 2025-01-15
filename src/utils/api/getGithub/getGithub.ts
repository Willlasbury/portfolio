import filterRepos from "./filterRepos";
import Repository from "@/utils/types/githubReops";

export default async function getGithub(): Promise<Array<Repository>> {
  try {
    const url = "https://api.github.com/users/willlasbury/repos";

    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      return filterRepos(data);
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
