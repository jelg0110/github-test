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

const getError = (error: Error | Response) => {
  if (error instanceof Response) {
    switch (error.status) {
      case 404:
        return 'The resource wasn´t found';
      default:
        return 'There was an error with your request, try again';
    }
  } else if (error instanceof Error) {
    return error.message;
  }
  return 'There was an error with your request, try again';
}

export {
  cFetch,
  getError,
};