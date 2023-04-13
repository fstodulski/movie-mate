<script lang="ts">
  import { onMount } from 'svelte';
  import { isEmpty } from 'ramda';

  import ReleasedDateAndRating from '$lib/components/Movie/ReleasedDateAndRating.svelte';
  import { _pastSearches } from '$lib/core/constants/keys.const';
  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster';
  import { serializeLocalstorage } from '$lib/core/utils/serialize-localstorage';

  let movies: Array<any> = [];

  onMount(() => {
    movies = serializeLocalstorage<any[], any[]>(_pastSearches, []);
  });
</script>

{#if !isEmpty(movies)}
  <section class="flex flex-col">
    <span class="text-h300 text-text-default-muted">Past searches</span>

    {#if !isEmpty(movies)}
      {#each movies as movie}
        <div class="flex w-full items-center p-1">
          <figure class="w-[43px] overflow-hidden rounded-md">
            <img
              src={parsePoster(movie.poster_path, POSTER_SIZES.enum.w342)}
              alt=""
              class="w-full h-full"
            />
          </figure>
          <div class="flex flex-col">
            <span class="text-h400 text-text-default-strong">{movie.title}</span>
            <ReleasedDateAndRating {movie} />
          </div>
        </div>
      {/each}
    {/if}
  </section>
{/if}
