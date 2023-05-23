<script lang="ts">
  import { onMount } from 'svelte';
  import { invalidate } from '$app/navigation';

  import type { LayoutData } from './$types';

  import '../styles/app.scss';

  export let data: LayoutData;

  let deferredInstallEvent;

  $: ({ supabase, session } = data);

  const handleInstall = async () => {
    deferredInstallEvent.prompt();

    let choice = await deferredInstallEvent.userChoice;

    if (choice.outcome === 'accepted') {
      // User accepted to install the application
      console.log('accepted');
    } else {
      console.log('declined');
      // User dismissed the prompt
    }
    deferredInstallEvent = undefined;
  };

  onMount(async () => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallEvent = e;
    });

    const { data: supabaseData } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    adsbygoogle = (window.adsbygoogle || []).push({});

    return () => supabaseData.subscription.unsubscribe();
  });
</script>

<ins
  class="bygoogle"
  style="display:inline-block;width:360px;height:800px"
  data-ad-client="ca-pub-4553897102634434"
  data-ad-slot="2193757109"
/>

<slot />
