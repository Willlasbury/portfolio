import { expect, expectTypeOf, test } from 'vitest'
import getGithub from "../src/utils/api/getGithub/getGithub"
import Repository from '../src/utils/types/githubReops'
import { CloudCog } from 'lucide-react'

test('Fetch some repositories from github', async () => {
    const data = await getGithub()
    
    expect(data).toEqual<Number>()
})