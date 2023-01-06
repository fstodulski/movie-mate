import { redirect } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

import type { LayoutLoad } from '../../../.svelte-kit/types/src/routes/$types';

export const load: LayoutLoad = async (event) => {
  const { session } = await getSupabase(event);

  if (session) throw redirect(302, '/feed/most-popular');

  return {
    session
  };
};
