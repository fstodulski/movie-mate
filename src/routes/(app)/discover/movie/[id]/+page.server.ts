import { MoviesRepository } from '$lib/core/repositories/movies.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, request, url, cookies }) => {
  const movie = MoviesRepository.findMyId(params.id);
  const videos = MoviesRepository.movies(params.id);
  const providers = MoviesRepository.movieProviders(params.id);

  return {
    movie,
    providers,
    videos
  };
};
