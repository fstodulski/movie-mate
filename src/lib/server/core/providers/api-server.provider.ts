import { dev } from '$app/environment';
import wretch from 'wretch';

import { API_ENDPOINT } from '$env/static/private';

export const ApiServerProvider = wretch(dev ? `${API_ENDPOINT}` : `${process.env.PUBLIC_HOST_URL}`)
  .headers({
    'Content-type': 'application/json'
  })
  .resolve((r) => r.json());
