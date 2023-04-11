import { cFetch } from "./utils";
import { BASE } from "../consts/App"
import { ApiRepository, Languages } from "../types/Repository";

const getUserRepositories = (user: string) => {
  const endpoint = BASE.endpoints.repositories(user);
  return cFetch<ApiRepository[]>(endpoint);
}

const getRepositoryLanguages = (user: string, repo: string) => {
  const endpoint = BASE.endpoints.repositoryLanguages(user, repo);
  return cFetch<Languages>(endpoint);
}

export {
  getUserRepositories,
  getRepositoryLanguages,
}