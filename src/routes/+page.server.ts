import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async () => {
  // const res = await ApiServerProvider.get(API_ENDPOINTS.api.discovery.mostPopular);
  // if (!res.data) throw error(StatusCodes.NO_CONTENT);
  //
  // return {
  //   mostPopular: res.data
  // };

  throw redirect(302, '/feed/most-popular');
}) satisfies PageServerLoad;
