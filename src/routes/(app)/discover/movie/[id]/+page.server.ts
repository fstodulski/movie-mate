import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '$lib/server/providers/api-server.provider';

import type { PageServerLoad } from './$types';

export const load = (async ({ params, request, url }) => {
  const movie = await ApiServerProvider.get(
    API_ENDPOINTS.api.movies.byId.replace(':id', params.id)
  );
  const providers = await ApiServerProvider.get(
    API_ENDPOINTS.api.movieToProvider.byId.replace(':id', params.id)
  );

  return {
    movie,
    providers
  };
}) satisfies PageServerLoad;
