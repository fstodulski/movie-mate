import type { Actions } from '@sveltejs/kit';

import { MoviesRepository } from '$lib/core/repositories/movies.repository';

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

  const moviesByName = await MoviesRepository.findByName(query);

  return {
    movies: moviesByName.movies
  };
};

export const actions: Actions = {};
