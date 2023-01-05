import axios from 'axios';

import { HOST_URL } from '$env/static/private';

export const ApiServerProvider = axios.create({
  baseURL: HOST_URL || process.env.VERCEL_URL,
  headers: {
    'Content-type': 'application/json'
  }
});
