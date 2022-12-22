import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiClientProvider } from '$lib/core/providers/api-client.provider';

const popularMovies = async () => {
  try {
    const res = await ApiClientProvider.get(API_ENDPOINTS.api.discovery.mostPopular);

    if (!res.data) return [];

    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const DiscoverRepository = {
  popularMovies
};
