<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { Close, Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Input } from 'flowbite-svelte';
  import { isEmpty } from 'ramda';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import PastSearches from './components/PastSearches/PastSearches.svelte';
  import SearchResultsBox from './components/SearchResultsBox/SearchResultsBox.svelte';

  let innerHeight: number;
  let clientHeight: number;

  $: clientHeight = innerHeight - 100;

  let history: Array<any> = [];

  let name = '';

  const clearInput = () => {
    name = '';
  };

  const select = async (query: string) => {
    name = query;
  };

  onMount(() => {
    if ($page.data.movies.results.length > 0) {
      name = $page.url.searchParams.get('query');
    }

    if (browser) {
    }
  });

  onDestroy(() => {});
</script>

<svelte:window bind:innerHeight />

<aside class="fixed top-0 left-0 w-full h-screen bg-bg-default-muted-default z-50 px-4 py-4">
  <form
    method="GET"
    action="?/search"
    in:fly={{ y: 50, duration: 400 }}
    class="flex w-full gap-2 items-center pb-4"
  >
    <Input
      id="search"
      type="text"
      name="query"
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
  </form>

  {#if isEmpty(name)}
    <PastSearches />
  {/if}

  {#if !isEmpty($page.data.movies.results)}
    <SearchResultsBox />
  {/if}

  {#if !name}
    <div class="flex flex-col w-full mt-2 gap-3">
      {#each history as query}
        <span class="py-2 bg-gray-300 px-1 rounded-md" on:click={() => select(query)}>{query}</span>
      {/each}
    </div>
  {/if}
</aside>
