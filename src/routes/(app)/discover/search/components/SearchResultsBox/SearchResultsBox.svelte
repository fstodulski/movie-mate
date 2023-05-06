<script lang="ts">
  import { page } from '$app/stores';

  import MovieBubble from '$lib/components/MovieBubble/MovieBubble.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import { _pastSearches } from '$lib/core/constants/keys.const';
  import { saveToLocalStorage } from '$lib/core/utils/localstore';
  import { serializeLocalstorage } from '$lib/core/utils/serialize-localstorage';

  const addMovieToPastSearch = async (movie: any) => {
    const movies = serializeLocalstorage(_pastSearches, []);
    saveToLocalStorage(_pastSearches, [...new Set([...movies, movie])]);
  };

  let query: string;
  $: query = $page.url.searchParams.get('query');
</script>

<section class="scroll-area pb-4">
  <div class="flex mt-2 mb-4">
    <span class="text-h300 text-text-light-muted">
      Search results for: <span class="text-text-light-strong">{query}</span>
    </span>
  </div>

  <div class="flex flex-col gap-4">
    {#each $page.data.movies.results as movie}
      <a
        href={APP_ROUTES.discover.movie.replace(':id', movie.tmdb_id)}
        on:click={() => addMovieToPastSearch(movie)}
      >
        <MovieBubble {movie} />
      </a>
    {/each}
  </div>
</section>

<style lang="scss">
  .scroll-area {
    height: calc(100vh - 145px);
    @apply overflow-y-auto;
  }
</style>
