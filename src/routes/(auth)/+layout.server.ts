import { redirect } from '@sveltejs/kit';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/$types';

export const load = (async (event) => {
  const session = await getServerSession(event);

  if (session) throw redirect(302, '/feed/most-popular');

  return {
    session
  };
}) satisfies PageServerLoad;
