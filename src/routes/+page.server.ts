import { redirect } from '@sveltejs/kit';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
  throw redirect(302, APP_ROUTES.feed.mostPopular);
}) satisfies PageServerLoad;
