import { getServerSession } from '@supabase/auth-helpers-sveltekit';

import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/$types';

export const load = (async (event) => {
  const session = await getServerSession(event);

  return {
    session
  };
}) satisfies PageServerLoad;
