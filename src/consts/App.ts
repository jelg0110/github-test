export const BASE = {
  baseUrl: process.env.REACT_APP_GITHUB_API || '',
  endpoints: {
    repositories: (user: string) => `users/${user}/repos`,
    repositoryLanguages: (user: string, repo: string) => `repos/${user}/${repo}/languages`
  },
};