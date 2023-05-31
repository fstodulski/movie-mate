<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let height = 0;
  const dispatch = createEventDispatcher();

  const handleClose = () => {
    dispatch('close');
  };

  onMount(() => {
    document.body.style.overflowY = 'hidden';
  });

  onDestroy(() => {
    document.body.style.overflowY = 'initial';
  });
</script>

<svelte:window bind:innerHeight={height} />

<div
  in:fade={{ duration: 200 }}
  class="fixed top-0 left-0 h-screen pointer-events-none w-screen z-[100]"
/>

<aside
  in:fly={{ y: height, duration: 1000 }}
  out:fly={{ y: height * 1.2, duration: 300 }}
  class="fixed z-[101] max-h-[98%] overflow-y-scroll bottom-0 left-0 animation ease-in w-full rounded-tl-md rounded-tr-md bg-background-dark-muted-default"
>
  <div class="py-2 flex w-full">
    <div class="h-1 bg-white rounded-md w-1/2 mx-auto" on:click={handleClose} />
  </div>

  <div class="flex flex-col">
    <slot />
  </div>
</aside>

<style lang="scss" global>
  .animation {
    transition: bottom 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  }

  body {
    overflow-y: hidden !important;
  }
</style>
