import type { ServerLoad } from '@sveltejs/kit';

import { API_ENDPOINTS } from '../../../../../lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '../../../../../lib/server/core/providers/api-server.provider';

export const load: ServerLoad = async ({ params }) => {
  const req = await ApiServerProvider.get(
    API_ENDPOINTS.api.discovery.moviesInGenre.replace(':id', params.id)
  );

  return {
    feed: req
  };
};
