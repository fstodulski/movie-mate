import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { responseHandler } from '$lib/core/utils/response-handler';
import { parseUrl } from '$lib/server/utils/parse-url';

const getMovieState = async (movieId: string) => {
  return apiClient
    .headers({ Authorization: `Bearer ${token}` })
    .get(parseUrl(API_ENDPOINTS.watchlists.movieStatus, { movieId: movieId }))
    .json(responseHandler<any>);
};

export const WatchlistRepository = {
  getMovieState
};
