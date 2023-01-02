<script lang="ts">
  import { AppNavigationConst } from '$lib/containers/AppNavigation/app-navigation.const.js';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<nav
  class="fixed bottom-0 left-0 flex bg-white w-full pt-2 items-start justify-around border-t border-t-gray-200"
>
  {#each AppNavigationConst as link}
    <a href={link.link}>
      <div class="flex flex-col items-center">
        <Icon src={link.icon} size="24px" theme="solid" />
        <span class="text-xs">{link.label}</span>
      </div>
    </a>
  {/each}
</nav>
