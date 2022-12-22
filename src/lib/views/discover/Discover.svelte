<script lang="ts">
  import { DiscoverStore } from '$lib/views/discover/discover.store.js';
  import { Button } from 'flowbite-svelte';
  import { onMount } from 'svelte';

  import { DiscoverService } from './discover.service';

  let innerHeight: number;
  let clientHeight: number;

  $: clientHeight = innerHeight - 60;

  const _fetchMostPopular = async () => {
    await DiscoverService.mostPopular();
  };

  onMount(async () => {
    await _fetchMostPopular();
  });
</script>

<svelte:window bind:innerHeight />

<main
  style="height: {clientHeight}px;"
  class="flex flex-col max-w-screen-sm mx-auto gap-4 px-2 overflow-auto"
>
  <form class="py-2 px-1 w-full flex gap-2 items-center">
    <input class="py-1 px-3 w-full bg-gray-100 rounded-md" />
    <Button size="xs">Search</Button>
  </form>

  <div class="grid grid-cols-2 gap-3">
    {#each $DiscoverStore as discoverStore}
      <figure class="w-full overflow-hidden rounded-md">
        <img
          class="w-full"
          src="https://image.tmdb.org/t/p/w200{discoverStore.poster_path}"
          alt=""
        />
      </figure>
    {/each}
  </div>
</main>
