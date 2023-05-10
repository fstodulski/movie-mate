import type { Handle } from '@sveltejs/kit';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';

import { AuthRepository } from '$lib/core/repositories/auth.repository';
import { UsersRepository } from '$lib/core/repositories/users.repository';

import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URI } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URI,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event
  });

  event.locals.getSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    return session;
  };

  const session = await event.locals.getSession();

  if (session) {
    const { data } = await AuthRepository.login(session);
    const { data: userData, error: userError } = await UsersRepository.me(data.access_token);
    event.locals.user = userData;
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range';
    }
  });
};
