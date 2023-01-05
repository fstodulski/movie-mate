import { DiscoverRepository } from '$lib/core/repositories/discover.repository';
import { GenresStore } from '$lib/views/discover/components/genres/genres.store';

const all = async () => {
  const res = await DiscoverRepository.genres();

  GenresStore.set(res);
};

export const GenresService = {
  all
};
