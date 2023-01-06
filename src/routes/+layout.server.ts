import { redirect } from '@sveltejs/kit';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutServerLoad = async (event) => {
  const { url } = event;
  const session = await getServerSession(event);

  if (!session && url.pathname !== '/auth') throw redirect(302, '/auth');

  return {
    session
  };
};
