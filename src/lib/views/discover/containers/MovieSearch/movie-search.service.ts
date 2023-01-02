import { MovieRepository } from '$lib/core/repositories/movie.repository';
import { MovieSearchStore } from '$lib/views/discover/containers/MovieSearch/movie-search.store';

const queryName = async (name: string) => {
  const res = await MovieRepository.byName(name);

  MovieSearchStore.set(res.results);
  console.log(res.results);
};
export const MovieSearchService = {
  queryName
};
