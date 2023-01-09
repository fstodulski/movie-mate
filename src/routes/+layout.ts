import type { Load } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: Load = async (event) => {
  const { session } = await getSupabase(event);

  return {
    session
  };
};
