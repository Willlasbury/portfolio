import { http } from "msw";
import { HttpResponse } from "msw";
import { gitData } from "./fakeData/githubRepo";
import { repoLanguageData } from "./fakeData/repoLanguages";

export const handlers = [
  // get repo data
  http.get("https://api.github.com/users/willlasbury/repos", () => {
    return HttpResponse.json(gitData);
  }),
  // get language data 
  http.get("https://api.github.com/repos/octocat/hello-world/languages0", () => {
    return HttpResponse.json(repoLanguageData[0])
  }),
  http.get("https://api.github.com/repos/octocat/hello-world/languages1", () => {
    return HttpResponse.json(repoLanguageData[1])
  }),
  http.get("https://api.github.com/repos/octocat/hello-world/languages2", () => {
    return HttpResponse.json(repoLanguageData[2])
  }),

  // get leetCode data
  http.post("https://leetcode.com/graphql", () => {
    return HttpResponse.json({"hello": "world"})
  })
];
