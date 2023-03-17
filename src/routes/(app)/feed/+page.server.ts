import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '$lib/server/providers/api-server.provider';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const res = await ApiServerProvider.get(API_ENDPOINTS.api.feed.index);

  if (!res) throw error(StatusCodes.NO_CONTENT);

  return {
    feed: res
  };
};
