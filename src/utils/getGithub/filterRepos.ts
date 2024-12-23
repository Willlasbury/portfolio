
type Repo = {
  title: string
  topics: string
}

export default async function filterRepos(repos: Repo[]) {
    return repos.filter((repo) => {
     const topics = repo.topics;
     if (topics.includes("portfolio")) {
       return repo;
     }
   });
 }