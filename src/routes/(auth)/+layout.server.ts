import { redirect } from '@sveltejs/kit';
import { isNil } from 'ramda';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  const { locals, parent } = event;
  await parent();

  const session = await locals.getSession();

  if (!isNil(session)) {
    throw redirect(303, APP_ROUTES.account.index);
  }

  return {
    session
  };
};
