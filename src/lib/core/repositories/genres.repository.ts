import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { responseHandler } from '$lib/core/utils/response-handler';

const findAll = async () => {
  return await apiClient.get(API_ENDPOINTS.genres.findAll).json(responseHandler<any>);
};

export const GenresRepository = {
  findAll
};
