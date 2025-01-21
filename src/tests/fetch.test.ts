import {
  expect,
  expectTypeOf,
  test,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import getGithub from "../utils/api/getGithub/getGithub";
import { server } from "./mock/server";
import { gitData } from "./mock/fakeData/githubRepo";

// setup server
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// check that git hub fetch works
test("Fetch some repositories from github", async () => {
  const data = await getGithub();
  // only the third repo is tagged as portfolio
  // this checks the filter function built into getGithub
  expect(data).toEqual([gitData[2]]);
});