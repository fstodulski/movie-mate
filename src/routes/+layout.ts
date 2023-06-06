import { dev } from '$app/environment';
import { init } from '@sentry/svelte';
import { BrowserTracing } from '@sentry/tracing';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

import type { LayoutLoad } from './$types';

!dev &&
  init({
    dsn: process.env.PUBLIC_SENTRY,
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  });

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth');

  const supabase = createSupabaseLoadClient({
    supabaseUrl: import.meta.env.VITE_PUBLIC_SUPABASE_URI,
    supabaseKey: import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session
  });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return {
    supabase,
    session
  };
};
