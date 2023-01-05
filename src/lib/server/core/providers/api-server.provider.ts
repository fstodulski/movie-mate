import { dev } from '$app/environment';
import axios from 'axios';

export const ApiServerProvider = axios.create({
  baseURL: dev ? process.env.VERCEL_URL : `https://${process.env.VERCEL_URL}`,
  headers: {
    'Content-type': 'application/json'
  }
});
