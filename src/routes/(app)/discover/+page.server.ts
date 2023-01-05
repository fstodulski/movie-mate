import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '$lib/server/core/providers/api-server.provider';

import type { PageServerLoad } from './$types';

export const load = (async () => {
  const res = await ApiServerProvider.get(API_ENDPOINTS.api.discovery.genres);

  return {
    genres: res.data || []
  };
}) satisfies PageServerLoad;
