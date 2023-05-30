import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { parseError } from '$lib/core/utils/parse-error';
import { responseHandler } from '$lib/core/utils/response-handler';
import { parseUrl } from '$lib/server/utils/parse-url';

const findOne = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.genres.findOne, { id }))
    .json(responseHandler<any>);
};

export const GenresRepository = {
  findAll: async () => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.genres.findAll).json(responseHandler<any>);

      return {
        genres: response.data,
        error: null
      };
    } catch (e) {
      console.log(e);
      return {
        genres: null,
        error: parseError(e)
      };
    }
  },
  findOne
};
