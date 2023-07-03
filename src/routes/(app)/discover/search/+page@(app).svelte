<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { Close, Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Input } from 'flowbite-svelte';
  import { isEmpty } from 'ramda';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import PastSearches from './components/PastSearches/PastSearches.svelte';
  import SearchResultsBox from './components/SearchResultsBox/SearchResultsBox.svelte';
  import { searchMovieStore } from './search-movie.store';

  let innerHeight: number;
  let clientHeight: number;

  let name = '';

  const clearInput = () => {
    name = '';
  };

  const fetchMovies = async () => {
    if (browser) {
      await searchMovieStore.fetchMovies(name);
    }
  };
  onMount(async () => {});

  $: clientHeight = innerHeight - 100;
</script>

<svelte:window bind:innerHeight />

<aside class="fixed top-0 left-0 w-full h-screen bg-bg-default-muted-default z-50 px-4 py-4">
  <div in:fly|global={{ y: 50, duration: 400 }} class="flex w-full gap-2 items-center pb-4">
    <Input
      id="search"
      type="text"
      name="query"
      on:change={fetchMovies}
      bind:value={name}
      class="grow"
      placeholder="Movie name"
    >
      <Icon slot="left" src={Search2} size="20px" />

      <a slot="right" on:click={clearInput} type="reset" href={APP_ROUTES.discover.search}>
        {#if !isEmpty(name)}
          <Icon src={Close} size="20px" />
        {/if}
      </a>
    </Input>
    <a class="btn tertiary xl" href={APP_ROUTES.discover.index}> Cancel </a>
  </div>

  {#if isEmpty(name)}
    <PastSearches />
  {/if}

  {#if !isEmpty($searchMovieStore.movies)}
    <SearchResultsBox />
  {/if}
</aside>
