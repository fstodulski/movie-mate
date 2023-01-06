import { createClient } from '@supabase/auth-helpers-sveltekit';

import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URI } from '$env/static/public';

export const supabaseClientProvider = createClient(PUBLIC_SUPABASE_URI, PUBLIC_SUPABASE_ANON_KEY);
