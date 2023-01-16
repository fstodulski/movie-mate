<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon';

  import { AppNavigationConst } from '$lib/containers/AppNavigation/app-navigation.const.js';
  import { SIZES } from '$lib/core/constants/sizes.const';
</script>

<nav
  class="fixed bottom-0 left-0 flex bg-white w-full pt-2 items-start justify-around border-t border-t-gray-200"
  style="height: {SIZES.bottomBar}px"
>
  {#each AppNavigationConst as link}
    <a href={link.link}>
      <div class="flex flex-col items-center">
        <Icon src={link.icon} size="24px" />
        <span class="text-xs">{link.label}</span>
      </div>
    </a>
  {/each}
</nav>
