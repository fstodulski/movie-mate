import { MovieRepository } from '$lib/core/repositories/movie.repository';
import { SearchStore } from '$lib/views/discover/search/search.store';

const queryName = async (name: string) => {
  const res = await MovieRepository.byName(name);

  SearchStore.set(res.results);
};
export const SearchService = {
  queryName
};
