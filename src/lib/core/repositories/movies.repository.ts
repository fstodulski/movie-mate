import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { responseHandler } from '$lib/core/utils/response-handler';
import { parseUrl } from '$lib/server/utils/parse-url';

const findMyId = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.movies.byId, { id }))
    .json(responseHandler<any>);
};

const movies = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.movies.videos, { id }))
    .json(responseHandler<any>);
};

const movieProviders = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.api.movieToProvider.byId, { id }))
    .json(responseHandler<any>);
};

export const MoviesRepository = {
  findMyId,
  movies,
  movieProviders
};
