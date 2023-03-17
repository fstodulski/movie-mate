import axios from 'axios';

import { OPEN_AI_KEY } from '$env/static/private';

export const OpenaiHttpProvider = axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    Authorization: `Bearer ${OPEN_AI_KEY}`
  }
});
