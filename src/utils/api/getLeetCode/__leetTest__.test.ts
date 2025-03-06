import { expect, it, beforeAll, afterEach, afterAll } from "vitest";
import getLeetCode from "./getLeetCode";
import { server } from "@/tests/mock/server";
import { leetData } from "../../../tests/mock/fakeData/leetData";
import { describe } from "node:test";
describe("Test leetCode fetches", () => {
  // setup server
  // Establish API mocking before all tests.
  beforeAll(() => server.listen());

  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers());

  // Clean up after the tests are finished.
  afterAll(() => server.close());

  // check that git hub fetch works
  // describe.skip("Get data from leetCode", () => {
  it("Get data from leetCode", async () => {
    // return the third repo from githubRepos
    const data = await getLeetCode();
    
    expect(data).toEqual({ hello: "world" });
  });
});
