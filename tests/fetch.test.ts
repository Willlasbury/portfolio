import { expect, expectTypeOf, test, beforeAll, afterEach, afterAll } from 'vitest'
import getGithub from "../src/utils/api/getGithub/getGithub"
import {server} from "../msw/server"
import { gitData } from '../msw/fakeData'
// setup server
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

test('Fetch some repositories from github', async () => {
    const data = await getGithub()

    expect(data).toEqual([gitData[2]])
})