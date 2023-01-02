import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiClientProvider } from '$lib/core/providers/api-client.provider';
import { handleResponse } from '$lib/core/repositories/handle-response';

const popularMovies = async () => {
  try {
    const res = await ApiClientProvider.get(API_ENDPOINTS.api.discovery.mostPopular);

    return await handleResponse(res, []);
  } catch (e) {
    console.error(e);
  }
};

const genres = async () => {
  try {
    const res = await ApiClientProvider.get(API_ENDPOINTS.api.discovery.genres);

    return await handleResponse(res, []);
  } catch (e) {}
};

export const DiscoverRepository = {
  popularMovies,
  genres
};
