<script>
  import { createEventDispatcher } from 'svelte';
  import { Close } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  export let open = false;
  const dispatch = createEventDispatcher();

  const handleClose = () => {
    dispatch('close');
  };
</script>

<div
  class="fixed top-0 left-0 h-screen pointer-events-none w-screen bg-background-overlay-default/[0.80] z-40 opacity-0 duration-100"
  class:opacity-100={open}
/>

<aside
  class:-bottom-full={!open}
  class:bottom-16={open}
  class="fixed z-50 left-0 animation ease-in w-full rounded-tl-md rounded-tr-md bg-background-dark-strong-default px-4 pt-4"
>
  <div class="flex w-full mb-4">
    <button class="ml-auto" on:click={handleClose}>
      <Icon src={Close} size="20px" class="text-text-light-strong m-2" />
    </button>
  </div>

  <div class="flex flex-col">
    <slot />
  </div>
</aside>

<style lang="scss">
  .animation {
    transition: bottom 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  }
</style>
