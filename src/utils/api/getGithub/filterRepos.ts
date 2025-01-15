import Repository from "@/utils/types/githubReops";

export default function filterRepos(repos: Repository[]): Repository[] {
    return repos.filter((repo) => {
     const topics = repo.topics;
     if (topics.includes("portfolio")) {
       return repo;
     }
   });
 }