<script lang="ts">
  import { fly } from 'svelte/transition';
  import { isEmpty } from 'ramda';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import type { PageData } from './$types';
  import SearchResultsBox from './components/SearchResultsBox/SearchResultsBox.svelte';
  import SearchMovieForm from './forms/SearchMovieForm.svelte';
  import { searchMovieStore } from './search-movie.store';

  export let data: PageData;
  let innerHeight: number;
  let clientHeight: number;

  $: clientHeight = innerHeight - 100;
</script>

<svelte:window bind:innerHeight />

<aside class="fixed top-0 left-0 w-full h-screen bg-bg-default-muted-default z-50 px-4 py-4">
  <div in:fly|global={{ y: 50, duration: 400 }} class="flex w-full gap-2 items-center pb-4">
    <SearchMovieForm formData={data.searchMovieForm} />
    <a class="btn tertiary xl" href={APP_ROUTES.discover.index}> Cancel </a>
  </div>

  <!--{#if isEmpty(name)}-->
  <!--    <PastSearches />-->
  <!--{/if}-->

  {#if !isEmpty($searchMovieStore.movies)}
    <SearchResultsBox />
  {/if}
</aside>
