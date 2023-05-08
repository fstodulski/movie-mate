<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { ArrowLeftS, UserSettings } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { includes } from 'ramda';

  import { SIZES } from '$lib/core/constants/sizes.const';
  const ALLOWED_PAGES = ['/discover'];

  const historyBack = () => {
    if (browser) window.history.back();
  };
</script>

{#if includes($page.route.id, ALLOWED_PAGES)}
  <header
    class="fixed top-0 left-0 flex w-full p-2 py-3 z-50 justify-between"
    style="height: {SIZES.topBar}px"
  >
    <a on:click={historyBack}>
      <Icon src={ArrowLeftS} class="w-6 h-6" />
    </a>
    <button>
      <Icon src={UserSettings} theme="solid" class="ml-auto w-6 h-6" />
    </button>
  </header>
{/if}
