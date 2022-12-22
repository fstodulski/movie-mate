import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiClientProvider } from '$lib/core/providers/api-client.provider';

const byId = async (id: string) => {
  try {
    const res = await ApiClientProvider.get(API_ENDPOINTS.api.movie.replace(':id', id));

    if (!res.data) return null;
  } catch (e) {
    console.error(e);
  }
};

export const MovieRepository = {
  byId
};
