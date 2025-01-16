import RepoLanguages from "@/utils/types/githubRepoLang";

export default async function getRepoLanguages (url: string): Promise<RepoLanguages> {
    try {
        const res = await fetch(url)
        
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