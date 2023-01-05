import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '$lib/server/core/providers/api-server.provider';

import type { PageServerLoad } from './$types';

export const load = (async ({ params, request, url }) => {
  const host = url.origin;

  console.log(host);

  const movieUrl = `${host}/api${API_ENDPOINTS.api.movie.replace(':id', params.id)}`;

  console.log(movieUrl);
  const providersUrl = `${host}/api/scrap`;

  const res = await ApiServerProvider.get(movieUrl);

  const providers = await ApiServerProvider.get(providersUrl, {
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
