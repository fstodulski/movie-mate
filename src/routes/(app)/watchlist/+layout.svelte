<script lang="ts">
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  let innerHeight: number;

  let clientHeight: number;

  $: clientHeight = innerHeight - 60;
</script>

<svelte:window bind:innerHeight />

<main style="height: {clientHeight}px;" class="flex flex-col max-w-screen-sm mx-auto gap-4 px-2">
  <h3>Watchlist</h3>
  <div class="flex items-center gap-2">
    <a class="box" href={APP_ROUTES.watchlist.toWatch}>To watch</a>
    <a class="box" href={APP_ROUTES.watchlist.watched}>Watched</a>
  </div>

  <slot />
</main>

<style lang="scss">
  .box {
    @apply px-3 py-1 border border-gray-400;
  }
</style>
