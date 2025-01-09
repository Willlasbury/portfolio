import fetchRepos from "../fetchUrl";
import filterRepos from "./filterRepos";
import Repository from "@/utils/types/githubReops";

export default async function getGithub(): Promise<Array<Repository>> {
    const url = "https://api.github.com/users/willlasbury/repos";
    const service = 'github'
    const repos: Array<Repository> = await fetchRepos(url, service);
    return await filterRepos(repos); 
}