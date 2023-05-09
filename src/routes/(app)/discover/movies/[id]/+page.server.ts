import { redirect } from '@sveltejs/kit';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import { MoviesRepository } from '$lib/core/repositories/movies.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { params } = event;

  if (!params.id) return redirect(302, APP_ROUTES.discover.search);

  const movie = await MoviesRepository.findOne(params.id);
  const trailers = await MoviesRepository.trailers(params.id);
  const credits = await MoviesRepository.movieCredits(params.id);
  const providers = await MoviesRepository.movieProviders(params.id);

  return {
    movie: movie.data,
    trailers: trailers.data,
    credits: credits.data,
    providers: providers.data
  };
};
