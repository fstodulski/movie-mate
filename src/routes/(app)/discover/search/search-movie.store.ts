import { get, writable } from 'svelte/store';

import { MoviesRepository } from '$lib/core/repositories/movies.repository';

type SearchMovieStore = {
  isLoading: boolean;
  page: number;
  movies: any[];
};

const INITIAL_STATE: SearchMovieStore = {
  isLoading: false,
  page: 1,
  movies: []
};

const _searchMovieStore = writable<SearchMovieStore>(INITIAL_STATE);

const _updateSearchMovieStore = (newState: Partial<SearchMovieStore>) => {
  _searchMovieStore.update((state) => ({ ...state, ...newState }));
};

const _incrementPage = () => {
  _updateSearchMovieStore({ page: get(_searchMovieStore).page + 1 });
};

const _fetchMovies = async (query: string) => {
  _updateSearchMovieStore({ isLoading: true });

  const currentPage = get(_searchMovieStore).page;
  const { movies } = await MoviesRepository.findByName(query, currentPage);

  _updateSearchMovieStore({
    isLoading: false,
    movies: [...get(_searchMovieStore).movies, ...movies.results]
  });
};

export const searchMovieStore = {
  subscribe: _searchMovieStore.subscribe,
  fetchMovies: _fetchMovies,
  incrementPage: _incrementPage
};
