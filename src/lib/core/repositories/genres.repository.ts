import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { responseHandler } from '$lib/core/utils/response-handler';
import { parseUrl } from '$lib/server/utils/parse-url';

const findAll = async () => {
  return await apiClient.get(API_ENDPOINTS.genres.findAll).json(responseHandler<any>);
};

const findOne = async (id: string) => {
  return await apiClient
    .get(parseUrl(API_ENDPOINTS.genres.findOne, { id }))
    .json(responseHandler<any>);
};

export const GenresRepository = {
  findAll,
  findOne
};
