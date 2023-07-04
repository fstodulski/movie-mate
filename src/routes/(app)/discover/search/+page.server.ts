import type { Actions } from '@sveltejs/kit';

import { MoviesRepository } from '$lib/core/repositories/movies.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const nameParam = await event.url.searchParams.get('name');
  const limit = ((await event.url.searchParams.get('limit')) as string) || '10';
  const page = ((await event.url.searchParams.get('page')) as string) || '1';

  const movies = await MoviesRepository.findByName(
    nameParam as string,
    parseInt(page),
    parseInt(limit)
  );

  return {
    movies
  };
};

export const actions: Actions = {
  searchMovie: async (event) => {
    const data = await event.request.formData();
    const name = data.get('name');

    if (name && name.length >= 3) {
      return {};
    }
  }
};
