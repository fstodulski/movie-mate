import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { TmdbHttpProviderv3 } from '$lib/server/core/providers/tmdb-http.provider';
import { createResponse } from '$lib/server/utils/create-response';

export const GET: RequestHandler = async () => {
  const res = await TmdbHttpProviderv3.get('/discover/movie?sort_by=popularity.desc');

  if (!res.data) throw error(StatusCodes.BAD_REQUEST);

  return createResponse(res.data, {
    status: StatusCodes.OK
  });
};
