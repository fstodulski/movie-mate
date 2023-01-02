<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import MovieCard from '$lib/components/MovieCard/MovieCard.svelte';
  import { MovieSearchService } from '$lib/views/discover/containers/MovieSearch/movie-search.service';
  import { MovieSearchStore } from '$lib/views/discover/containers/MovieSearch/movie-search.store.js';

  let innerHeight: number;
  let clientHeight: number;
  let searchInput: HTMLInputElement;

  $: clientHeight = innerHeight - 100;
  export let onCancel: () => void;

  let name: string;
  const handleSubmit = async () => {
    await MovieSearchService.queryName(name);
  };

  onMount(() => {
    searchInput.focus();
  });

  onDestroy(() => {
    MovieSearchStore.set([]);
  });
</script>

<svelte:window bind:innerHeight />

<aside
  in:fly={{ y: 200, duration: 400 }}
  out:fly={{ y: 200, duration: 400 }}
  class="fixed top-0 left-0 w-full h-screen bg-gray-200 z-50 px-2 py-4"
>
  <form class="flex w-full gap-2 mb-8" on:submit={handleSubmit}>
    <input
      bind:this={searchInput}
      type="text"
      class="w-full"
      placeholder="Movie name"
      bind:value={name}
    />
    <button type="button" on:click={onCancel}>Cancel</button>
  </form>

  {#if $MovieSearchStore.length > 0}
    <div class="flex flex-col gap-3 overflow-auto" style="height: {clientHeight}px">
      <div class="flex flex-col">
        <span class="text-2xl">Search results for: {name}</span>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <!--    Here goes the results-->

        {#if $MovieSearchStore.length > 0}
          {#each $MovieSearchStore as movie}
            <MovieCard data={movie} />
          {/each}
        {:else}{/if}
      </div>
    </div>
  {/if}
</aside>
