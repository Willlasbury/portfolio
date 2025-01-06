import Repository from "@/utils/types/githubReops";

export default async function filterRepos(repos: Repository[]) {
    return repos.filter((repo) => {
     const topics = repo.topics;
     if (topics.includes("portfolio")) {
       return repo;
     }
   });
 }