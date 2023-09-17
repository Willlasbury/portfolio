export default async function getRepos(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw console.error();
    }
  } catch (error) {
    return new Error("Could not access Github at this time", error);
  }
}
