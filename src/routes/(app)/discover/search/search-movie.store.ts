import { get, writable } from 'svelte/store';

import { MoviesRepository } from '$lib/core/repositories/movies.repository';

type SearchMovieStore = {
  isLoading: boolean;
  page: number;
  query?: string;
  movies: any[];
};

const INITIAL_STATE: SearchMovieStore = {
  isLoading: false,
  page: 1,
  query: '',
  movies: []
};

const _searchMovieStore = writable<SearchMovieStore>(INITIAL_STATE);

const _updateSearchMovieStore = (newState: Partial<SearchMovieStore>) => {
  _searchMovieStore.update((state) => ({ ...state, ...newState }));
};

const _incrementPage = () => {
  _updateSearchMovieStore({ page: get(_searchMovieStore).page + 1 });
};

const _loadMore = async () => {
  _incrementPage();
  const { query, page } = get(_searchMovieStore);

  const { movies } = await MoviesRepository.findByName(query, page);

  _updateSearchMovieStore({
    isLoading: false,
    movies: [...get(_searchMovieStore).movies, ...movies.results]
  });
};

const _fetchMovies = async (name?: string) => {
  if (name) _updateSearchMovieStore({ query: name });

  _updateSearchMovieStore({ isLoading: true });

  const { query, page } = get(_searchMovieStore);
  const { movies } = await MoviesRepository.findByName(query, page);

  _updateSearchMovieStore({
    isLoading: false,
    movies: movies.results
  });
};

export const searchMovieStore = {
  subscribe: _searchMovieStore.subscribe,
  fetchMovies: _fetchMovies,
  incrementPage: _incrementPage,
  loadMore: _loadMore
};
