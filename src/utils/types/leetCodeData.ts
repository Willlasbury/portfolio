type QuestionCount = {
    difficulty: string;
    count: number;
  };
  
  type ContributionStats = {
    points: number;
    questionCount: number;
    testcaseCount: number;
  };
  
  type UserProfile = {
    realName: string;
    userAvatar: string;
    birthday: string | null;
    ranking: number;
    reputation: number;
    websites: string[];
    countryName: string | null;
    company: string | null;
    school: string | null;
    skillTags: string[];
    aboutMe: string;
    starRating: number;
  };
  
  type Badge = {
    name: string;
    icon: string;
  };
  
  type SubmissionStats = {
    difficulty: string;
    count: number;
    submissions: number;
  };
  
  type SubmitStats = {
    totalSubmissionNum: SubmissionStats[];
    acSubmissionNum: SubmissionStats[];
  };
  
  type RecentSubmission = {
    title: string;
    titleSlug: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
  };
  
  type MatchedUser = {
    username: string;
    githubUrl: string | null;
    twitterUrl: string | null;
    linkedinUrl: string | null;
    contributions: ContributionStats;
    profile: UserProfile;
    badges: Badge[];
    upcomingBadges: Badge[];
    activeBadge: Badge | null;
    submitStats: SubmitStats;
    submissionCalendar: string;
  };
  
  type LeetData = {
    allQuestionsCount: QuestionCount[];
    matchedUser: MatchedUser;
    recentSubmissionList: RecentSubmission[];
  };
  
  export type StoredLeetData = {
    data: LeetData;
  };