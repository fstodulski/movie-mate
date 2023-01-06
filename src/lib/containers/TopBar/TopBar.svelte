<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { ArrowLeftS, UserSettings } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import { SIZES } from '$lib/core/constants/sizes.const';
  import { supabaseClientProvider } from '$lib/core/providers/supabase-client.provider';

  const historyBack = () => {
    if (browser) window.history.back();
  };

  const signOut = async () => {
    const a = await supabaseClientProvider.auth.signOut();
    await goto('/auth');
  };
</script>

<header
  class="fixed top-0 left-0 flex w-full p-2 py-3 z-50 justify-between"
  style="height: {SIZES.topBar}px"
>
  <a on:click={historyBack}>
    <Icon src={ArrowLeftS} class="w-6 h-6" />
  </a>
  <button on:click={signOut}>
    <Icon src={UserSettings} theme="solid" class="ml-auto w-6 h-6" />
  </button>
</header>
