import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { responseHandler } from '$lib/core/utils/response-handler';

const me = async (token: string) => {
  return await apiClient
    .headers({ Authorization: `Bearer ${token}` })
    .get(API_ENDPOINTS.users.me)
    .json(responseHandler<any>);
};

export const UsersRepository = {
  me
};
