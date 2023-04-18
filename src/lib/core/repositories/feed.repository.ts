import { get } from 'svelte/store';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { apiClient } from '$lib/core/providers/api-client.provider';
import { responseHandler } from '$lib/core/utils/response-handler';
import { AuthStore } from '$lib/store/auth.store';

const getFeed = async () => {
  return await apiClient
    .headers({
      Authorization: `Bearer ${get(AuthStore)?.access_token}`
    })
    .get(API_ENDPOINTS.api.feed.index)
    .json(responseHandler<any>);
};

export const FeedRepository = {
  getFeed
};
