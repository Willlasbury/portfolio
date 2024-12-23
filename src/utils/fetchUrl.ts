export default async function getRepos(url:string, service:string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('response not okay');
      }
    } catch (error) {
      if (error instanceof Error)
        alert(`Could not access ${service} at this time: ${error.message}` );
    }
  }