<script lang="ts">
  import { Close } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  export let isOpen: boolean;
</script>

<aside
  class:-bottom-12={!isOpen}
  class:bottom-20={isOpen}
  class="fixed left-1/2 ease-in-out -translate-x-1/2 duration-300 w-full z-50"
>
  <div class="w-full px-4">
    <div
      class="rounded-md p-4 flex items-center justify-between w-full gap-4 border border-border-default-muted-alpha/[0.32] bg-background-dark-default-default"
    >
      <slot />

      <button class="btn tertiary icon xs" on:click>
        <Icon size="20px" src={Close} class="text-text-light-default ml-auto" />
      </button>
    </div>
  </div>
</aside>
