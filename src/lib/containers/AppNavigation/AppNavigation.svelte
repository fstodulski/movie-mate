<script lang="ts">
  import { page } from '$app/stores';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { includes } from 'ramda';

  import { AppNavigationConst } from '$lib/containers/AppNavigation/app-navigation.const.js';
  import { SIZES } from '$lib/core/constants/sizes.const';

  let path: string;

  $: path = $page.url.pathname;

  console.log($page.url.pathname);
</script>

<nav
  class="fixed bottom-0 left-0 flex w-full items-center justify-around bg-bg-default-muted-default z-[51]"
  style="height: {SIZES.bottomBar}px"
>
  {#each AppNavigationConst as link}
    <a href={link.link} class:active={includes(link.link, path)} class="rounded-[12px]">
      <div class="flex flex-col items-center text-text-default-default py-2 px-3 ">
        <Icon src={link.icon} size="20px" theme={includes(link.link, path) ? 'solid' : ''} />
        <span class="text-t100">{link.label}</span>
      </div>
    </a>
  {/each}
</nav>

<style lang="scss">
  .active {
    @apply bg-bg-default-muted-alpha;
  }
</style>
