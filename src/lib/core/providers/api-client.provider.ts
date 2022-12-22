import axios from 'axios';

export const ApiClientProvider = axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json'
  }
});
