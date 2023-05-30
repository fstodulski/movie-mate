import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import type { ByNameResponse } from '$lib/core/models/api/tmdb-response.model';
import type { PaginatedResponse } from '$lib/core/models/paginated-response.model';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { parseError } from '$lib/core/utils/parse-error';
import { responseHandler } from '$lib/core/utils/response-handler';
import { parseUrl } from '$lib/server/utils/parse-url';

const trailers = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.movies.videos, { id }))
    .json(responseHandler<any>);
};

const movieProviders = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.movies.providers, { id }))
    .json(responseHandler<any>);
};

const movieCredits = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.movies.credits, { id }))
    .json(responseHandler<any>);
};

const moviesByGenre = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.movies.byGenre, { id }))
    .json(responseHandler<any>);
};

export const MoviesRepository = {
  findOne: async (id: string) => {
    try {
      const response = await apiClient
        .get(parseUrl(API_ENDPOINTS.movies.byId, { id }))
        .json(responseHandler<any>);

      return {
        movie: response.data,
        error: null
      };
    } catch (error) {
      console.log(error);
      return {
        movie: null,
        error: parseError(error)
      };
    }
  },
  findByName: async (name: string) => {
    try {
      const response = await apiClient
        .query({ name, page: 1, limit: 10 })
        .get(API_ENDPOINTS.movies.byName)
        .json(responseHandler<PaginatedResponse<ByNameResponse>>);

      return {
        movies: response.data,
        error: null
      };
    } catch (e) {
      return {
        movies: [],
        error: parseError(e)
      };
    }
  },
  trailers,
  movieProviders,
  movieCredits,
  moviesByGenre
};
