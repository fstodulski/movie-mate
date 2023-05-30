import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import { MoviesRepository } from '$lib/core/repositories/movies.repository';
import { WatchlistRepository } from '$lib/core/repositories/watchlist.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  await event.parent();

  const { params, locals } = event;
  const session = await locals.getSession();

  if (!params.id) return redirect(302, APP_ROUTES.discover.search);

  try {
    const movieResponse = await MoviesRepository.findOne(params.id);
    const trailers = MoviesRepository.trailers(params.id);
    const credits = MoviesRepository.movieCredits(params.id);
    const providers = await MoviesRepository.movieProviders(params.id);
    const movieStatus = session ? await WatchlistRepository.getMovieState(params.id) : null;

    return {
      movie: movieResponse.movie,
      trailers,
      credits,
      providers: providers.data,
      movieStatus: movieStatus?.data
    };
  } catch (e) {
    console.log(e);
  }
};

export const actions: Actions = {
  addToWatchlist: async (event) => {
    const { params, locals } = event;
    const session = await locals.getSession();
    if (!session) return fail(401);

    if (!params.id) throw fail(StatusCodes.BAD_REQUEST);

    try {
      const res = await WatchlistRepository.addMovieToWatchlist(params.id);
      console.log(res);
    } catch (e) {
      console.log(e);
      // return fail(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
};
