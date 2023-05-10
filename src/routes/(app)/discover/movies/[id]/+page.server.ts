import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import { MoviesRepository } from '$lib/core/repositories/movies.repository';
import { WatchlistRepository } from '$lib/core/repositories/watchlist.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { params, locals } = event;
  const session = await locals.getSession();
  console.log(session);

  if (!params.id) return redirect(302, APP_ROUTES.discover.search);

  const movie = await MoviesRepository.findOne(params.id);
  const trailers = await MoviesRepository.trailers(params.id);
  const credits = await MoviesRepository.movieCredits(params.id);
  const providers = await MoviesRepository.movieProviders(params.id);
  const movieStatus = session ? await WatchlistRepository.getMovieState(params.id) : null;
  console.log(movieStatus);

  return {
    movie: movie.data,
    trailers: trailers.data,
    credits: credits.data,
    providers: providers.data,
    movieStatus: null
  };
};

export const actions: Actions = {
  addToWatchlist: async (event) => {
    const { params, locals } = event;

    const session = await locals.getSession();
    if (!session) return fail(401, 'You need to be logged in to add a movie to your watchlist');
  }
};
