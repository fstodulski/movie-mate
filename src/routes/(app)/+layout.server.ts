import type { ServerLoad } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import { AuthRepository } from '$lib/core/repositories/auth.repository';
import { UsersRepository } from '$lib/core/repositories/users.repository';
import { AuthStore } from '$lib/store/auth.store';

export const load: ServerLoad = async ({ locals }) => {
  // TODO: Add it later

  const session = await locals.getSession();

  if (session) {
    try {
      const { data } = await AuthRepository.login(session);

      AuthStore.setTokens(data);

      const { data: userData, error: userError } = await UsersRepository.me(data.access_token);

      if (!userError) {
        return {
          user: userData
        };
      }
    } catch (e) {
      throw redirect(303, APP_ROUTES.auth.index);
    }
  } else {
    return {
      user: null
    };
  }
};
