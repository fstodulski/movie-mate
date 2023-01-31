import { goto } from '$app/navigation';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import { supabaseClientProvider } from '$lib/core/providers/supabase-client.provider';

const signOut = async () => {
  const a = await supabaseClientProvider.auth.signOut();
  await goto(APP_ROUTES.auth.index);
};

export const AuthService = {
  signOut
};
