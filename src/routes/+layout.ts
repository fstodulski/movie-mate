import type { Load } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { init } from '@sentry/svelte';
import { BrowserTracing } from '@sentry/tracing';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

!dev &&
  init({
    dsn: process.env.PUBLIC_SENTRY,
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  });

export const load: Load = async (event) => {
  const { session } = await getSupabase(event);

  return {
    session
  };
};
