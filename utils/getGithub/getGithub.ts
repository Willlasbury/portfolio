import fetchRepos from "../fetchUrl";
import filterRepos from "./filterRepos";

export default async function getFetch() {
  try {
    const url = "https://api.github.com/users/willlasbury/repos";
    const service = 'github'
    const repos = await fetchRepos(url, service);
    if (repos.message) {
      throw Error(repos.message);
    }
    const toDisplay = await filterRepos(repos);
    return toDisplay;
  } catch (error) {
    return error;
  }
}