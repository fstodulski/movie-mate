import { writable } from 'svelte/store';

import { MoviesRepository } from '$lib/core/repositories/movies.repository';

export type SingleMovieStore = {
  isLoading?: boolean;
  movie?: any;
  trailers?: any;
  credits?: any;
  providers?: any;
  movieStatus?: any;
};

const INITIAL_STATE: SingleMovieStore = {
  isLoading: true,
  movie: null,
  trailers: null,
  credits: null,
  providers: null,
  movieStatus: null
};

const _singleMovieStore = writable<SingleMovieStore>(INITIAL_STATE);

const _updateStore = (state: SingleMovieStore) => {
  _singleMovieStore.update((prev) => ({ ...prev, ...state }));
};

const _fetchMovie = async (id: string) => {
  _updateStore({
    isLoading: true
  });

  const { movie } = await MoviesRepository.findOne(id);
  const trailers = MoviesRepository.trailers(id);
  const credits = await MoviesRepository.movieCredits(id);
  const providers = await MoviesRepository.movieProviders(id);

  _updateStore({
    isLoading: false,
    movie,
    trailers,
    credits: credits.data,
    providers: providers.data
  });
};

export const singleMovieStore = {
  subscribe: _singleMovieStore.subscribe,
  fetchMovie: _fetchMovie
};
