import wretch from 'wretch';

import { parseError } from '../utils/parse-error';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export const apiClient = wretch(BASE_URL)
  .options({ credentials: 'include', mode: 'cors' })
  .headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
  .resolve((_) =>
    _.forbidden(parseError)
      .unauthorized(parseError)
      .internalError(parseError)
      .badRequest(parseError)
      .notFound(parseError)
  );
