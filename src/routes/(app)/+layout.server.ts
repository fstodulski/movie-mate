import type { ServerLoad } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { isNil } from 'ramda';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import { AuthRepository } from '$lib/core/repositories/auth.repository';
import { UsersRepository } from '$lib/core/repositories/users.repository';
import { AuthStore } from '$lib/store/auth.store';

export const load: ServerLoad = async ({ locals }) => {
  const session = await locals.getSession();

  if (isNil(session)) {
    throw redirect(303, APP_ROUTES.auth.index);
  }

  const { data, error } = await AuthRepository.login(session);

  if (!error) {
    AuthStore.setTokens(data);

    const { data: userData, error: userError } = await UsersRepository.me(data.access_token);

    if (!userError) {
      return {
        user: userData
      };
    }

    throw redirect(303, APP_ROUTES.auth.index);
  }

  if (error) {
    throw redirect(303, APP_ROUTES.auth.index);
  }
};
