export const BASE = {
  baseUrl: process.env.REACT_APP_GITHUB_API || '',
  endpoints: {
    repositories: (user: string) => `users/${user}/repos`,
    repository: (user: string, repo: string) => `repos/${user}/${repo}`,
    repositoryLanguages: (user: string, repo: string) => `repos/${user}/${repo}/languages`,
    repositoryReadme: (user: string, repo: string) => `repos/${user}/${repo}/readme`,
  },
};