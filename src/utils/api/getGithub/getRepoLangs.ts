import RepoLanguages from "@/utils/types/githubRepoLang";

const token = import.meta.env.GITHUBACCESSTOKEN

export default async function getRepoLanguages (url: string): Promise<RepoLanguages> {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': token
              }        })
        
        if (res.ok) {
            const data = res.json()
            return data
        } else {
            throw new Error(`${res.statusText} ${await res.text()}`);
        }
    } catch (err) {
        if (err instanceof Error) {
            //  TODO
            console.log(err)
        }
        return {}
    }
}