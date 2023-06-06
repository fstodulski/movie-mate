<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let startY = 0;
  let currentY = 0;
  let roadY = 0;
  let isGettingBack = false;
  let isDragging = false;
  let isClosing = false;
  let height = 0;

  const dispatch = createEventDispatcher();

  function handleTouchStart(event) {
    if (event.touches.length === 1) {
      startY = event.touches[0].clientY;
      currentY = startY;
      isDragging = true;
      isClosing = false;
    }
  }

  function handleTouchMove(event) {
    if (isDragging && event.touches.length === 1) {
      currentY = event.touches[0].clientY;
      roadY = Math.abs(startY - currentY);
    }
  }

  function handleTouchEnd() {
    if (isDragging) {
      isDragging = false;

      const deltaY = currentY - startY;
      const threshold = window.innerHeight * 0.5;
      if (deltaY >= threshold) {
        dispatch('close');
        isClosing = true;
      } else {
        roadY = 0;
        isGettingBack = true;
      }
    }
  }

  onMount(() => {
    document.body.style.overflow = 'hidden';
  });

  onDestroy(() => {
    document.body.style.overflow = 'auto';
  });
</script>

<svelte:window bind:innerHeight={height} />

<aside
  in:fly={{ y: height, duration: 1000 }}
  out:fly={{ y: height * 1.2, duration: 1000 }}
  class="fixed z-[101] max-h-[98%] overflow-y-scroll bottom-0 left-0 animation ease-in w-full rounded-tl-md rounded-tr-md bg-background-dark-muted-default"
  style="transform: translateY({roadY}px);"
  class:closing={isClosing}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={handleTouchEnd}
>
  <slot />
</aside>
