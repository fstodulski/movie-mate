import { get, writable } from 'svelte/store';

import type { Movie } from '$lib/core/models/movie.model';
import type { PaginatedResponse } from '$lib/core/models/paginated-response.model';
import { MoviesRepository } from '$lib/core/repositories/movies.repository';

type SearchMovieStore = PaginatedResponse<Movie> & {
  isLoading: boolean;
  query?: string;
};

const INITIAL_STATE: SearchMovieStore = {
  isLoading: false,
  page: 1,
  limit: 10,
  query: '',
  results: []
};

const _searchMovieStore = writable<SearchMovieStore>(INITIAL_STATE);

const _updateSearchMovieStore = (newState: Partial<SearchMovieStore>) => {
  _searchMovieStore.update((state) => ({ ...state, ...newState }));
};

const _incrementPage = () => {
  // if total Pages is less than page, then we don't need to increment
  if (get(_searchMovieStore).total_pages <= get(_searchMovieStore).page) return;

  _updateSearchMovieStore({ page: get(_searchMovieStore).page + 1 });
};

const _loadMore = async () => {
  _incrementPage();
  const { query, page, limit } = get(_searchMovieStore);

  const { movies } = await MoviesRepository.findByName(query, page, limit);

  _updateSearchMovieStore({
    isLoading: false,
    results: [...get(_searchMovieStore).results, ...movies.results]
  });
};

const _fetchMovies = async (name?: string) => {
  if (name) _updateSearchMovieStore({ query: name });

  _updateSearchMovieStore({ isLoading: true });

  const { query, page } = get(_searchMovieStore);
  const { movies } = await MoviesRepository.findByName(query as string, page);

  _updateSearchMovieStore({
    isLoading: false,
    results: movies.results
  });
};

const _setInitial = (movies: PaginatedResponse<Movie>) => {
  console.log(movies);
  _updateSearchMovieStore({
    query: movies.query,
    isLoading: false,
    results: movies.results,
    total_pages: movies.total_pages,
    total_results: movies.total_results,
    page: +movies.page,
    limit: +movies.limit
  });
};

export const searchMovieStore = {
  subscribe: _searchMovieStore.subscribe,
  fetchMovies: _fetchMovies,
  incrementPage: _incrementPage,
  setInitial: _setInitial,
  loadMore: _loadMore
};
