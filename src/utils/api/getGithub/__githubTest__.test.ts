import { expect, it, beforeAll, afterEach, afterAll } from "vitest";
import getGithub from "./getGithub";
import getRepoLanguage from "./getRepoLangs";
import { server } from "@/tests/mock/server";
import { gitData } from "../../../tests/mock/fakeData/githubRepo";
import { repoLanguageData } from "../../../tests/mock/fakeData/repoLanguages";
import { describe } from "node:test";
// setup server
// Establish API mocking before all tests.
describe("Test github fetches", () => {
  beforeAll(() => server.listen());

  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers());

  // Clean up after the tests are finished.
  afterAll(() => server.close());
  it("Fetch some repositories from github", async () => {
    const data = await getGithub();
    // only the third repo is tagged as portfolio
    // this checks the filter function built into getGithub
    expect(data).toEqual([gitData[2],gitData[0], gitData[1]]);
    const langData = await getRepoLanguage(data[0].languages_url);

    expect(langData).toEqual(repoLanguageData[2]);
  });
});
