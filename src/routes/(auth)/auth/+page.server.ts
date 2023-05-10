import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { locals, url } = event;
  const session = await locals.getSession();

  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, '/feed');
  }

  return { url: url.origin };
};

export const actions: Actions = {
  googleSignIn: async (event) => {
    const redirectTo = `${import.meta.env.VITE_PUBLIC_HOST_URL}${APP_ROUTES.feed.index}`;

    const { data, error } = await event.locals.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo
      }
    });

    if (data) {
      throw redirect(303, data.url);
    }
  }
};
