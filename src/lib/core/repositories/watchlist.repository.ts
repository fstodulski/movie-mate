import { get } from 'svelte/store';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { parseError } from '$lib/core/utils/parse-error';
import { responseHandler } from '$lib/core/utils/response-handler';
import { parseUrl } from '$lib/server/utils/parse-url';
import { AuthStore } from '$lib/store/auth.store';

const getMovieState = async (movieId: string) => {
  const token = get(AuthStore)?.access_token;
  return apiClient
    .headers({ Authorization: `Bearer ${token}` })
    .get(parseUrl(API_ENDPOINTS.watchlists.movieStatus, { movieId: movieId }))
    .json(responseHandler<any>);
};

const addMovieToWatchlist = async (movieId: string) => {
  const token = get(AuthStore)?.access_token;
  return apiClient
    .headers({ Authorization: `Bearer ${token}` })
    .post({ movieId: movieId }, API_ENDPOINTS.watchlists.addMovie)
    .json(responseHandler<any>);
};

const findAll = async () => {
  const token = get(AuthStore)?.access_token;

  return apiClient
    .headers({ Authorization: `Bearer ${token}` })
    .get(API_ENDPOINTS.watchlists.findAll)
    .json(responseHandler<any>);
};

export const WatchlistRepository = {
  getMovieState,
  findAll,
  addMovieToWatchlist,
  removeMovieFromWatchlist: async (movieId: string, watchlistId: string) => {
    try {
      const response = await apiClient
        .auth(`Bearer ${get(AuthStore)?.access_token}`)
        .post({ movieId, watchlistId }, API_ENDPOINTS.watchlists.removeMovie)
        .json(responseHandler<any>);

      return {
        movie: response.data,
        error: null
      };
    } catch (e) {
      return {
        movie: null,
        error: parseError(e)
      };
    }
  }
};
