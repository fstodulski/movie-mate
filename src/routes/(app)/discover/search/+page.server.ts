import type { Actions } from '@sveltejs/kit';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '$lib/server/core/providers/api-server.provider';

import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
  const query = url.searchParams.get('query');

  if (!query)
    return {
      movies: {
        results: []
      }
    };

  const res = await ApiServerProvider.query({ name: query }).get(API_ENDPOINTS.api.movies.byName);
  return {
    movies: res || { results: [] }
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  search: async ({ request }) => {
    const { query } = Object.fromEntries(await request.formData());

    const res = await ApiServerProvider.query({ name: query }).get(API_ENDPOINTS.api.movies.byName);

    return {
      movies: res.results || []
    };
  }
};
