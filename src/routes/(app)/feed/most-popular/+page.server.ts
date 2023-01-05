import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '$lib/server/core/providers/api-server.provider';

import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes';

export const load = (async () => {
  const res = await ApiServerProvider.get(API_ENDPOINTS.api.discovery.mostPopular);
  if (!res.data) throw error(StatusCodes.NO_CONTENT);

  return {
    mostPopular: res.data
  };
}) satisfies PageServerLoad;
