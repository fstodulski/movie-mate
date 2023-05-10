import { GenresRepository } from '$lib/core/repositories/genres.repository';
import { parseError } from '$lib/core/utils/parse-error';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  try {
    const { data, error } = await GenresRepository.findAll();

    return {
      genres: data
    };
  } catch (e) {
    const error = parseError(e);

    return {
      errors: [error],
      genres: []
    };
  }
};
