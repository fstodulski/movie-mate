import type { Actions } from '@sveltejs/kit';

import { MoviesRepository } from '$lib/core/repositories/movies.repository';
import { handleError } from '$lib/server/utils/handle-error';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const query = event.url.searchParams.get('query');

  if (!query)
    return {
      movies: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0
      }
    };

  const { data, error } = await MoviesRepository.findByName(query);

  if (error) return handleError(error, event);

  return {
    movies: data
  };
};

export const actions: Actions = {};
