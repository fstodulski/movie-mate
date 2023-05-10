import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export const apiClient = wretch(BASE_URL)
  .options({ credentials: 'include', mode: 'cors' })
  .headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
  .addon(QueryStringAddon);
