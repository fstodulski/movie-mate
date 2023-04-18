import { goto } from '$app/navigation';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

const signOut = async () => {
  await goto(APP_ROUTES.auth.index);
};

export const AuthService = {
  signOut
};
