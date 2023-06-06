import type { ServerLoad } from '@sveltejs/kit';

import { GenresRepository } from '$lib/core/repositories/genres.repository';
import { MoviesRepository } from '$lib/core/repositories/movies.repository';
import { handleError } from '$lib/server/utils/handle-error';

export const load: ServerLoad = async (event) => {
  const { params } = event;

  if (!params.id) return;

  const genre = await GenresRepository.findOne(params.id);
  const { movies } = await MoviesRepository.moviesByGenre(params.id);

  if (genre.error) return handleError(genre.error, event);
  if (movies.error) return handleError(movies.error, event);

  return {
    genre: genre.data,
    movies
  };
};
