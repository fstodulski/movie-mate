<script lang="ts">
  import { onMount } from 'svelte';
  import { invalidate } from '$app/navigation';

  import { supabaseClientProvider } from '$lib/core/providers/supabase-client.provider';

  import '../styles/app.scss';

  onMount(() => {
    const {
      data: { subscription }
    } = supabaseClientProvider.auth.onAuthStateChange(() => {
      invalidate('supabase:auth');
    });

    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<slot />
