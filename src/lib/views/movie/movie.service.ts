import { MovieRepository } from '$lib/core/repositories/movie.repository';
import { MovieStore } from '$lib/views/movie/movie.store';

const single = async (id: string) => {
  const res = await MovieRepository.byId(id);

  if (!res) MovieStore.set({});
  MovieStore.set(res);
};

export const MovieService = {
  single
};
