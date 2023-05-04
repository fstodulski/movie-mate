import { GenresRepository } from '$lib/core/repositories/genres.repository';
import { handleError } from '$lib/server/utils/handle-error';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { data, error } = await GenresRepository.findAll();

  if (error) return handleError(error, event);

  return {
    genres: data
  };
};
