import axios from 'axios';

export const ApiServerProvider = axios.create({
  baseURL: process.env.VERCEL_URL,
  headers: {
    'Content-type': 'application/json'
  }
});
