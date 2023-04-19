import { MoviesRepository } from '$lib/core/repositories/movies.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, request, url, cookies }) => {
  const [movie, videos, providers, credits] = await Promise.all([
    MoviesRepository.findMyId(params.id),
    MoviesRepository.movies(params.id),
    MoviesRepository.movieProviders(params.id),
    MoviesRepository.movieCredits(params.id)
  ]);

  return {
    movie,
    providers,
    videos,
    credits
  };
};
