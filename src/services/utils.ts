import { BASE } from "../consts/App";

const cFetch = async <T extends any>(relativeUrl: string, config?: RequestInit) => {
  try {
    const url = BASE.baseUrl + relativeUrl;
    const response = await fetch(url, config);
    if (response.ok) {
      const data = await response.json();
      return data as T;
    } else {
      throw response;
    }
  } catch (error) {
    throw (error);
  }
}

export {
  cFetch
};