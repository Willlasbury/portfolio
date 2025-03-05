type Rank = {
    rank: number;
    name: string;
    color: string;
    score: number;
  };
  
  type LanguageRanks = {
    [language: string]: Rank;
  };
  
  type Ranks = {
    overall: Rank;
    languages: LanguageRanks;
  };
  
  type CodeChallenges = {
    totalAuthored: number;
    totalCompleted: number;
  };
  
  type UserStats = {
    id: string;
    username: string;
    name: string;
    honor: number;
    clan: string;
    leaderboardPosition: number;
    skills: string[];
    ranks: Ranks;
    codeChallenges: CodeChallenges;
  };
  
  export default UserStats;