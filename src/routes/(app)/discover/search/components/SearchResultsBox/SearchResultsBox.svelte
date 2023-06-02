<script lang="ts">
  import { page } from '$app/stores';
  import { isEmpty } from 'ramda';

  import MovieBubble from '$lib/components/MovieBubble/MovieBubble.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import { _pastSearches } from '$lib/core/constants/keys.const';
  import { saveToLocalStorage } from '$lib/core/utils/localstore';
  import { serializeLocalstorage } from '$lib/core/utils/serialize-localstorage';
  import { uniqArray } from '$lib/core/utils/uniq-array';
  import { infiniteScroll } from '$lib/directives/infinite-scroll';

  import { searchMovieStore } from '../../search-movie.store';

  let query: string;

  const addMovieToPastSearch = async (movie: any) => {
    const movies = serializeLocalstorage(_pastSearches, []);
    const newMovies = uniqArray(
      [...movies, { ...movie, queryDate: new Date().getUTCDate() }],
      'id'
    );
    saveToLocalStorage(_pastSearches, newMovies);
  };

  const fetchMore = async () => {
    searchMovieStore.incrementPage();

    await searchMovieStore.fetchMovies(query);
  };

  $: query = $page.url.searchParams.get('query');
</script>

<section
  class="scroll-area pb-4"
  use:infiniteScroll={{
    threshold: 10,
    callback: fetchMore
  }}
>
  <div class="flex mt-2 mb-4">
    <span class="text-h300 text-text-light-muted">
      Search results for: <span class="text-text-light-strong">{query}</span>
    </span>
  </div>

  <div class="flex flex-col gap-4">
    {#if !isEmpty($searchMovieStore.movies)}
      {#each $searchMovieStore.movies as movie}
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
