import Repository from "./githubRepos";
import RepoLanguages from "./githubRepoLang";

type ProdRepository = Repository & {languages: RepoLanguages}
  
export default ProdRepository 