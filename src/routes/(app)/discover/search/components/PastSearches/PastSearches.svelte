<script lang="ts">
  import { onMount } from 'svelte';
  import { Close } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { isEmpty } from 'ramda';

  import ReleasedDateAndRating from '$lib/components/Movie/ReleasedDateAndRating.svelte';
  import { _pastSearches } from '$lib/core/constants/keys.const';
  import { saveToLocalStorage } from '$lib/core/utils/localstore';
  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster';
  import { serializeLocalstorage } from '$lib/core/utils/serialize-localstorage';

  import SearchResultsPlaceholder from '../SearchResultsPlaceholder/SearchResultsPlaceholder.svelte';

  let movies: Array<any> = [];

  const removeMovie = (movie: any) => {
    movies = movies.filter((m) => m.id !== movie.id);
    saveToLocalStorage(_pastSearches, movies);
  };

  onMount(() => {
    movies = serializeLocalstorage<any[], any[]>(_pastSearches, []);
  });
</script>

{#if !isEmpty(movies)}
  <section class="flex flex-col gap-5">
    <span class="text-h300 text-text-light-muted">Past searches</span>

    {#if !isEmpty(movies)}
      {#each movies as movie}
        <div class="flex w-full items-center p-1 gap-4">
          <figure class="w-[43px] overflow-hidden rounded-md">
            <img
              src={parsePoster(movie.poster_path, POSTER_SIZES.enum.w342)}
              alt=""
              class="w-full h-full"
            />
          </figure>
          <div class="flex flex-col gap-1">
            <span class="text-h400 text-text-light-strong">{movie.title}</span>
            <ReleasedDateAndRating {movie} />
          </div>
          <button on:click={() => removeMovie(movie)}>
            <Icon src={Close} size="20px" class="text-text-light-strong" />
          </button>
        </div>
      {/each}
    {/if}
  </section>
{:else}
  <SearchResultsPlaceholder />
{/if}
