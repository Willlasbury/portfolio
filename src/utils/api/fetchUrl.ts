import Repository from "../types/githubReops";

export default async function getRepos(url:string, service:string): Promise<any> {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data as any;
      } else {
        throw new Error('response not okay');
      }
    } catch (error) {
      if (error instanceof Error){
        alert(`Could not access ${service} at this time: ${error.message}` );
      }
      throw(error)
       
    }
  }