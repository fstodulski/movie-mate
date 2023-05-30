import { GenresRepository } from '$lib/core/repositories/genres.repository';
import { parseError } from '$lib/core/utils/parse-error';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  try {
    const { genres, error } = await GenresRepository.findAll();

    return {
      genres: genres,
      error
    };
  } catch (e) {
    return {
      genres: [],
      error: parseError(e)
    };
  }
};
