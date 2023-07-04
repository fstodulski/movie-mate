import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import type { ByNameResponse } from '$lib/core/models/api/tmdb-response.model';
import type { PaginatedResponse } from '$lib/core/models/paginated-response.model';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { parseError } from '$lib/core/utils/parse-error';
import { parseUrl } from '$lib/core/utils/parse-url';
import { responseHandler } from '$lib/core/utils/response-handler';

export const MoviesRepository = {
  findOne: async (id: string) => {
    return await apiClient
      .get(parseUrl(API_ENDPOINTS.movies.byId, { id }))
      .json(responseHandler<any>)
      .then((res) => ({ movie: res.data, error: null }))
      .catch((e) => ({ movie: null, error: parseError(e) }));
  },
  findByName: async (name: string, page = 1, limit = 10) => {
    return await apiClient
      .query({ name, page, limit })
      .get(API_ENDPOINTS.movies.byName)
      .json(responseHandler<PaginatedResponse<ByNameResponse>>)
      .then((res) => ({ movies: res.data, error: null }))
      .catch((e) => ({ movies: null, error: parseError(e) }));
  },
  trailers: async (id: string) => {
    return await apiClient
      .get(parseUrl(API_ENDPOINTS.movies.videos, { id }))
      .json(responseHandler<any>)
      .then((res) => ({ trailers: res.data, error: null }))
      .catch((e) => ({ trailers: null, error: parseError(e) }));
  },
  movieProviders: async (id: string) => {
    return await apiClient
      .get(parseUrl(API_ENDPOINTS.movies.providers, { id }))
      .json(responseHandler<any>)
      .then((res) => ({ providers: res.data, error: null }))
      .catch((e) => ({ providers: null, error: parseError(e) }));
  },
  movieCredits: async (id: string) => {
    return await apiClient
      .get(parseUrl(API_ENDPOINTS.movies.credits, { id }))
      .json(responseHandler<any>)
      .then((res) => ({ credits: res.data, error: null }))
      .catch((e) => ({ credits: null, error: parseError(e) }));
  },
  moviesByGenre: async (id: string) => {
    try {
      const response = await apiClient
        .get(parseUrl(API_ENDPOINTS.movies.byGenre, { id }))
        .json(responseHandler<any>);

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
  }
};
