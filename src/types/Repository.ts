export interface ApiRepository {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  owner: {
    login: string;
  }
}

export interface Languages {
  [key: string]: number;
}

export interface Repository extends ApiRepository {
  languages?: Languages;
}

