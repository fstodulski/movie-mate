<script lang="ts">
  import { get } from 'svelte/store';
  import { infiniteScrollAction } from 'svelte-legos';
  import { page } from '$app/stores';
  import { isEmpty } from 'ramda';

  import MovieBubble from '$lib/components/MovieBubble/MovieBubble.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import { _pastSearches } from '$lib/core/constants/keys.const';
  import type { Movie } from '$lib/core/models/movie.model';
  import type { PaginatedResponse } from '$lib/core/models/paginated-response.model';
  import { saveToLocalStorage } from '$lib/core/utils/localstore';
  import { serializeLocalstorage } from '$lib/core/utils/serialize-localstorage';
  import { uniqArray } from '$lib/core/utils/uniq-array';

  import { searchMovieStore } from '../../search-movie.store';

  export let movies: PaginatedResponse<Movie>;

  let searchQuery: string;

  const addMovieToPastSearch = async (movie: any) => {
    const movies = serializeLocalstorage(_pastSearches, []);
    const newMovies = uniqArray(
      [...movies, { ...movie, queryDate: new Date().getUTCDate() }],
      'id'
    );
    saveToLocalStorage(_pastSearches, newMovies);
  };

  const fetchMore = async () => {
    if (!get(searchMovieStore).isLoading) {
      await searchMovieStore.loadMore();
    }
  };

  $: searchQuery = $page.url.searchParams.get('name');
</script>

<section
  class="scroll-area pb-4"
  class:opacity-50={$searchMovieStore.isLoading}
  class:pointer-events-none={$searchMovieStore.isLoading}
  use:infiniteScrollAction={{
    delay: 400, // number, default 200
    distance: 0, // number, default: 0
    cb: fetchMore
  }}
>
  <div class="flex mt-2 mb-4">
    <span class="text-h300 text-text-light-muted">
      Search results for: <span class="text-text-light-strong">{searchQuery}</span>
    </span>
  </div>

  <div class="flex flex-col gap-4">
    {#if !isEmpty($searchMovieStore.results)}
      {#each $searchMovieStore.results as movie}
        <a
          href={APP_ROUTES.discover.movie.replace(':id', movie.tmdb_id)}
          on:click={() => addMovieToPastSearch(movie)}
        >
          <MovieBubble {movie} />
        </a>
      {/each}
    {/if}
  </div>
</section>

<style lang="scss">
  .scroll-area {
    height: calc(100vh - 145px);
    @apply overflow-y-auto;
  }
</style>
