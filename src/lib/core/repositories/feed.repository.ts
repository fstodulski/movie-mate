import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { responseHandler } from '$lib/core/utils/response-handler';

const getFeed = async () => {
  return await apiClient.get(API_ENDPOINTS.feed.index).json(responseHandler<any>);
};

export const FeedRepository = {
  getFeed
};
