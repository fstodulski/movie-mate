import type { Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { MoviesRepository } from '$lib/core/repositories/movies.repository';
import { ApiServerProvider } from '$lib/server/providers/api-server.provider';
import { handleError } from '$lib/server/utils/handle-error';

import type { PageServerLoad } from './$types';

const searchQuerySchema = z.object({
  query: z.string()
});

export const load: PageServerLoad = async (event) => {
  const query = event.url.searchParams.get('query');

  const form = await superValidate(searchQuerySchema);

  if (!query)
    return {
      form,
      movies: {
        results: []
      }
    };

  const { data, error } = await MoviesRepository.findByName(query);

  if (error) return handleError(error, event);

  console.log(data);
  return {
    form,
    movies: data || { results: [] }
  };
};

export const actions: Actions = {
  search: async ({ request }) => {
    const { query } = Object.fromEntries(await request.formData());

    const res = await ApiServerProvider.query({ name: query }).get(API_ENDPOINTS.api.movies.byName);

    return {
      movies: res.results || []
    };
  }
};
