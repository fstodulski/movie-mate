import { GenresRepository } from '$lib/core/repositories/genres.repository';
import { parseError } from '$lib/core/utils/parse-error';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  try {
    const genres = GenresRepository.findAll();

    return {
      genres
    };
  } catch (e) {
    return {
      genres: [],
      error: parseError(e)
    };
  }
};
