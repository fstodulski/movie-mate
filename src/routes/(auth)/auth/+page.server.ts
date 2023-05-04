import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

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
