<script lang="ts">
  import { ArrowRightS } from '@steeze-ui/remix-icons';
  import type { IconSource } from '@steeze-ui/remix-icons/types';
  import { Icon } from '@steeze-ui/svelte-icon';

  export let icon: IconSource;
</script>

<div class="flex w-full items-center py-2 gap-4" on:click>
  <figure
    class="w-12 flex items-center justify-center h-12 rounded-md bg-background-dark-muted-alpha/[0.16]"
  >
    <Icon class="text-text-light-default" src={icon} size="24px" />
  </figure>

  <span class="text-t300 text-text-light-strong">
    <slot />
  </span>

  <Icon src={ArrowRightS} size="24px" class="ml-auto text-text-light-strong" />
</div>
