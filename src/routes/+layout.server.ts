import { getServerSession } from '@supabase/auth-helpers-sveltekit';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { ApiServerProvider } from '$lib/server/core/providers/api-server.provider';

import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutServerLoad = async (event) => {
  const session = await getServerSession(event);

  if (session) {
    const res = await ApiServerProvider.post(API_ENDPOINTS.api.auth, session);

    return {
      session
    };
  }

  return {
    session
  };
};
