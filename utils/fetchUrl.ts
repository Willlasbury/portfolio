export default async function getRepos(url, service) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw console.error();
      }
    } catch (error) {
      return new Error(`Could not access ${service} at this time`, error);
    }
  }