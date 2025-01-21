import {
  expect,
  test,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import getGithub from "./getGithub";
import getRepoLanguage from "./getRepoLangs";
import { server } from "@/tests/mock/server";
import { repoLanguageData } from "../../../tests/mock/fakeData/repoLanguages";
// setup server
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// check that git hub fetch works
test("Get language data from github", async () => {
  // return the third repo from githubRepos
  const repoData = await getGithub()
  // 
  const data = await getRepoLanguage(repoData[0].languages_url);
  expect(data).toEqual(repoLanguageData[2]);
});
