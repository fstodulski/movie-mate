import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  return {
    me: event.locals.user
  };
};

export const actions: Actions = {
  signOut: async ({ locals }) => {
    const { error } = await locals.supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    throw redirect(303, APP_ROUTES.auth.index);
  }
};
