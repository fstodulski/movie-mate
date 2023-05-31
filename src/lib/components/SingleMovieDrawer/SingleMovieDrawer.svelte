<script>
  import { createEventDispatcher } from 'svelte';

  export let open = false;
  const dispatch = createEventDispatcher();

  const handleClose = () => {
    dispatch('close');
  };
</script>

<div
  class="fixed top-0 left-0 h-screen pointer-events-none w-screen bg-background-overlay-default/[0.80] z-40 opacity-0 duration-100"
  class:opacity-100={open}
  class:pointer-events-auto={open}
/>

<aside
  class:-bottom-full={!open}
  class:bottom-0={open}
  class="fixed z-[100] min-h-fit left-0 animation ease-in w-full rounded-tl-md rounded-tr-md bg-background-dark-strong-default"
>
  <div class="flex flex-col">
    <slot />
  </div>
</aside>

<style lang="scss">
  .animation {
    transition: bottom 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  }
</style>
