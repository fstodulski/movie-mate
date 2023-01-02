import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '$lib/server/core/providers/api-server.provider';

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const res = await ApiServerProvider.get(API_ENDPOINTS.api.movie.replace(':id', params.id));
  const providers = await ApiServerProvider.get('/scrap', {
    params: {
      movieId: params.id
    }
  });

  if (!res.data) throw error(StatusCodes.NOT_FOUND);

  return {
    movie: res.data,
    providers: providers.data
  };
}) satisfies PageServerLoad;
