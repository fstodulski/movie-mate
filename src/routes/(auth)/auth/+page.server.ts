import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

export const actions: Actions = {
  googleSignIn: async (event) => {
    const { data, error } = await event.locals.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'openid profile email',
        redirectTo: `https://127.0.0.1:5173${APP_ROUTES.profile.index}`
      }
    });

    if (data) {
      throw redirect(303, data.url);
    }
  }
};
