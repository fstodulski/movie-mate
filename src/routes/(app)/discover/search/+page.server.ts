import type { Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import { MoviesRepository } from '$lib/core/repositories/movies.repository';
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
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      }
    };

  const { data, error } = await MoviesRepository.findByName(query);

  if (error) return handleError(error, event);

  console.log(data);

  return {
    form,
    movies: data
  };
};

export const actions: Actions = {};
