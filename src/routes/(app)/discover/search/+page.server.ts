import { API_ENDPOINTS } from '../../../../lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '../../../../lib/server/core/providers/api-server.provider';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
  const query = url.searchParams.get('query');

  if (!query)
    return {
      movies: {
        results: []
      }
    };

  const res = await ApiServerProvider.get(API_ENDPOINTS.api.movies.byName);

  console.log(res);
  return {
    movies: res || { results: [] }
  };
}) satisfies PageServerLoad;
