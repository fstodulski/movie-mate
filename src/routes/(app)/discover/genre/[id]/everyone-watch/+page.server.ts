import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { TmdbHttpProviderv3 } from '$lib/server/core/providers/tmdb-http.provider';

import type { PageServerLoad } from './$types';

export const load = (async ({ url, params }) => {
  const genreId = params.id;
  const res = await TmdbHttpProviderv3.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
      with_genres: genreId
    }
  });

  if (!res.data) throw error(StatusCodes.NOT_FOUND);

  return {
    movies: res.data
  };
}) satisfies PageServerLoad;
