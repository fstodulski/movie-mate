import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';

import { parseError } from '$lib/core/utils/parse-error';
const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export const ApiServerProvider = wretch(BASE_URL)
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
  )
  .addon(QueryStringAddon);
