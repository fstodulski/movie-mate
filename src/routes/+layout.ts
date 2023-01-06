import type { Load } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: Load = async (event) => {
  const { url } = event;
  const { session } = await getSupabase(event);

  if (!session && url.pathname !== '/auth') throw redirect(302, '/auth');

  return {
    session
  };
};
