import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import type { TmdbPagedResponse } from '$lib/core/models/api/tmdb-paged-response.model';
import type { ByNameResponse } from '$lib/core/models/api/tmdb-response.model';
import { TmdbHttpProviderv3 } from '$lib/server/core/providers/tmdb-http.provider';
import { createResponse } from '$lib/server/utils/create-response';

export const GET: RequestHandler = async ({ url }) => {
  const name = await url.searchParams.get('name');

  if (!name) throw error(StatusCodes.BAD_REQUEST);
  const res = await TmdbHttpProviderv3.get<TmdbPagedResponse<ByNameResponse>>('/search/movie', {
    params: {
      query: name
    }
  });

  if (!res.data)
    return createResponse(
      {},
      {
        status: StatusCodes.NO_CONTENT
      }
    );

  return createResponse(res.data, {
    status: StatusCodes.OK
  });
};
