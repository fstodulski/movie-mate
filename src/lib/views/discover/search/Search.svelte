<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  import MovieCard from '$lib/components/MovieCard/MovieCard.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import { SearchService } from '$lib/views/discover/search/search.service';
  import { SearchStore } from '$lib/views/discover/search/search.store';

  let innerHeight: number;
  let clientHeight: number;
  let searchInput: HTMLInputElement;

  $: clientHeight = innerHeight - 100;

  let history: Array<any> = [];

  let name: string;
  const handleSubmit = async () => {
    await SearchService.queryName(name);

    if (browser) {
      const historyRaw = localStorage.getItem('search_queries');
      const history = JSON.parse(historyRaw) || [];

      localStorage.setItem('search_queries', JSON.stringify([...new Set([...history, name])]));
    }

    await goto(`?query=${encodeURIComponent(name.trim())}`, {
      keepFocus: true
    });
  };

  const select = async (query: string) => {
    name = query;
    await handleSubmit();
  };

  onMount(() => {
    searchInput.focus();

    if ($page.data.movies.length > 0) {
      SearchStore.set($page.data.movies.results);
      name = $page.url.searchParams.get('query');
    }

    if (browser) {
      history = JSON.parse(localStorage.getItem('search_queries')) || [];
    }
  });

  onDestroy(() => {
    SearchStore.set([]);
  });
</script>

<svelte:window bind:innerHeight />

<aside class="fixed top-0 left-0 w-full h-screen bg-gray-200 z-50 px-2 py-4">
  <form
    in:fly={{ y: 50, duration: 400 }}
    class="flex w-full gap-2 items-center"
    on:submit={handleSubmit}
  >
    <input
      bind:this={searchInput}
      type="text"
      class="w-full"
      placeholder="Movie name"
      bind:value={name}
    />
    <a type="button" href={APP_ROUTES.discover.index}>Cancel</a>
  </form>

  {#if $SearchStore.length > 0}
    <div class="flex flex-col gap-3 overflow-auto" style="height: {clientHeight}px">
      <div class="flex flex-col">
        <span class="text-2xl">Search results for: {name}</span>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <!--    Here goes the results-->
        {#if $SearchStore.length > 0}
          {#each $SearchStore as movie}
            <MovieCard data={movie} />
          {/each}
        {/if}
      </div>
    </div>
  {/if}

  {#if !name}
    <div class="flex flex-col w-full mt-2 gap-3">
      {#each history as query}
        <span class="py-2 bg-gray-300 px-1 rounded-md" on:click={() => select(query)}>{query}</span>
      {/each}
    </div>
  {/if}
</aside>
