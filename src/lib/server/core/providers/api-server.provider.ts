import { dev } from '$app/environment';
import axios from 'axios';

import { PUBLIC_HOST_URL } from '$env/static/public';

export const ApiServerProvider = axios.create({
  baseURL: dev ? `${PUBLIC_HOST_URL}/api` : `${process.env.HOST_URL}/api`,
  headers: {
    'Content-type': 'application/json'
  }
});
