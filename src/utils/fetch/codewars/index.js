import fetchStats from '../fetchUrl'

export default async function () {
    try {
        const url = 'https://www.codewars.com/api/v1/users/Willlasbury'
        const stats = await fetchStats(url);
        if (stats.message) {
          throw Error(stats.message);
        }
       return stats
      } catch (error) {
        return error;
      }
}
