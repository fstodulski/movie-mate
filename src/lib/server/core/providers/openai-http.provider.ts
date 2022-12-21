import { OPEN_AI_KEY } from '$env/static/private';
import axios from 'axios';

export const OpenaiHttpProvider = axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    Authorization: `Bearer ${OPEN_AI_KEY}`
  }
});
