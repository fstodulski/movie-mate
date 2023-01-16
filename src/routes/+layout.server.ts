import { getServerSession } from '@supabase/auth-helpers-sveltekit';

import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutServerLoad = async (event) => {
  const session = await getServerSession(event);

  if (session) {
    console.log('dupa', session);
  }

  return {
    session
  };
};
