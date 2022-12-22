import axios from 'axios';

import { TMDB_API_KEY } from '$env/static/private';

export const TmdbHttpProvider = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  headers: {
    Authorization: `Bearer ${TMDB_API_KEY}`,
    'Content-type': 'application/json;charset=utf-8'
  }
});
