import { getCmsApiUrl } from "../utils/getCmsApiUrl";

type CustomRequestInit = RequestInit & { isPreview?: boolean; };

const getCmsFetch = () => {
  const baseUrl = getCmsApiUrl();

  return async <T = any>(endpoint: string, options: CustomRequestInit = {}): Promise<T | null> => {
    const {
      isPreview,
      ...restOptions
    } = options;

    const url = `${baseUrl}${endpoint}`;
    const updatedOptions: CustomRequestInit = {
      ...(isPreview && {
        headers: {
          'Cache-Control': `no-cache`,
        },
      }),
      ...restOptions,
    };
    const response = await fetch(url, updatedOptions);

    if (options?.method === `DELETE` && response.status === 204) {
      return response as T;
    }

    if (!response.ok && response.status !== 404) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.status === 404) {
      return null;
    }

    return response.json() as Promise<T>;
  };
};

export const cmsFetch = getCmsFetch();
