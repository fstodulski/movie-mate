import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import type { ByNameResponse } from '$lib/core/models/api/tmdb-response.model';
import type { PaginatedResponse } from '$lib/core/models/paginated-response.model';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { parseError } from '$lib/core/utils/parse-error';
import { parseUrl } from '$lib/core/utils/parse-url';
import { responseHandler } from '$lib/core/utils/response-handler';

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
  findByName: async (name: string, page = 1) => {
    try {
      const response = await apiClient
        .query({ name, page, limit: 10 })
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
  trailers: async (id: string) => {
    try {
      const response = await apiClient
        .get(parseUrl(API_ENDPOINTS.movies.videos, { id }))
        .json(responseHandler<any>);

      return {
        trailers: response.data,
        error: null
      };
    } catch (e) {
      return {
        trailers: [],
        error: parseError(e)
      };
    }
  },
  movieProviders: async (id: string) => {
    try {
      const response = await apiClient
        .get(parseUrl(API_ENDPOINTS.movies.providers, { id }))
        .json(responseHandler<any>);

      return {
        providers: response.data,
        error: null
      };
    } catch (e) {
      return {
        providers: [],
        error: parseError(e)
      };
    }
  },
  movieCredits: async (id: string) => {
    try {
      const response = await apiClient
        .get(parseUrl(API_ENDPOINTS.movies.credits, { id }))
        .json(responseHandler<any>);

      return {
        credits: response.data,
        error: null
      };
    } catch (e) {
      return {
        credits: [],
        error: parseError(e)
      };
    }
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
