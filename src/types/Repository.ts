export interface ApiRepository {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  html_url: string;
  owner: {
    login: string;
  }
}

export interface Languages {
  [key: string]: number;
}

export interface Readme {
  type: string;
  content: string;
}

export interface Repository extends ApiRepository {
  languages?: Languages;
}