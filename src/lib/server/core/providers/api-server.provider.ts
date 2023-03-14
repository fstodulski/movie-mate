import { dev } from '$app/environment';
import axios from 'axios';

import { API_ENDPOINT } from "$env/static/private";


export const ApiServerProvider = axios.create({
  baseURL: dev ? `${API_ENDPOINT}` : `${process.env.PUBLIC_HOST_URL}`,
  headers: {
    'Content-type': 'application/json'
  }
});
