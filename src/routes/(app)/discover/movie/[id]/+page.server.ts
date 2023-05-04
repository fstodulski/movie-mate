import { MoviesRepository } from '$lib/core/repositories/movies.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const [movie, videos, providers] = await Promise.all([
    MoviesRepository.findMyId(params.id),
    MoviesRepository.movies(params.id),
    MoviesRepository.movieProviders(params.id)
  ]);

  return {
    movie,
    providers,
    videos,
    credits: MoviesRepository.movieCredits(params.id)
  };
};
