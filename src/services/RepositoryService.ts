import { cFetch } from "./utils";
import { BASE } from "../consts/App"
import { ApiRepository, Languages, Readme } from "../types/Repository";

const getUserRepositories = (user: string) => {
  const endpoint = BASE.endpoints.repositories(user);
  return cFetch<ApiRepository[]>(endpoint);
}

const getRepository = (user: string, repo: string) => {
  const endpoint = BASE.endpoints.repository(user, repo);
  return cFetch<ApiRepository>(endpoint);
}

const getRepositoryLanguages = (user: string, repo: string) => {
  const endpoint = BASE.endpoints.repositoryLanguages(user, repo);
  return cFetch<Languages>(endpoint);
}

const getRepositoryReadme = (user: string, repo: string) => {
  const endpoint = BASE.endpoints.repositoryReadme(user, repo);
  return cFetch<Readme>(endpoint);
}

export {
  getUserRepositories,
  getRepository,
  getRepositoryLanguages,
  getRepositoryReadme,
}