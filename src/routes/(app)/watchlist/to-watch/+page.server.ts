import { redirect } from '@sveltejs/kit';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { isNil } from 'ramda';

import { API_ENDPOINTS } from '$lib/core/constants/api-endpoints.const';
import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import { ApiServerProvider } from '$lib/server/providers/api-server.provider';

import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  const session = await getServerSession(event);

  if (!session) throw redirect(301, APP_ROUTES.auth.index);

  const url = `${API_ENDPOINTS.api.watchList.forUser.replace(':userId', session.user.id)}`;

  const res = await ApiServerProvider.get(url);

  if (!isNil(res.data)) {
    return {
      toWatch: res.data
    };
  }
}) satisfies PageServerLoad;
