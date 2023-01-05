import { dev } from '$app/environment';
import axios from 'axios';

import { HOST_URL } from '$env/static/private';

export const ApiServerProvider = axios.create({
  baseURL: dev ? `${HOST_URL}/api` : `${process.env.HOST_URL}/api`,
  headers: {
    'Content-type': 'application/json'
  }
});
