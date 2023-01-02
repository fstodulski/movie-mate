import { DiscoverRepository } from '$lib/core/repositories/discover.repository';
import { DiscoverStore } from '$lib/views/discover/discover.store';

const mostPopular = async () => {
  const res = await DiscoverRepository.popularMovies();

  DiscoverStore.set(res.results);
};

const genres = async () => {};

export const DiscoverService = {
  mostPopular,
  genres
};
