import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import type { TmdbPagedResponse } from '$lib/core/models/api/tmdb-paged-response.model';
import type { ByNameResponse } from '$lib/core/models/api/tmdb-response.model';
import { ApiClientProvider } from '$lib/core/providers/api-client.provider';
import { handleResponse } from '$lib/core/repositories/handle-response';

const byName = async (name: string) => {
  try {
    const res = await ApiClientProvider.get<TmdbPagedResponse<ByNameResponse>>(
      API_ENDPOINTS.api.discovery.search,
      {
        params: {
          name
        }
      }
    );

    return await handleResponse(res, []);
  } catch (e) {
    console.error(e);
  }
};

export const MovieRepository = {
  byName
};
