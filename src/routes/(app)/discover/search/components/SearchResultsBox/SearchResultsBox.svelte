<script lang="ts">
  import { page } from '$app/stores';

  import ReleasedDateAndRating from '$lib/components/Movie/ReleasedDateAndRating.svelte';
  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster';

  let query: string;

  $: query = $page.url.searchParams.get('query');
</script>

<section class="scroll-area pb-4">
  <div class="flex mt-2 mb-4">
    <span class="text-h300 text-text-default-muted">
      Search results for: <span class="text-text-default-strong">{query}</span>
    </span>
  </div>

  <div class="flex flex-col gap-4">
    {#each $page.data.movies.results as movie}
      <div
        class="flex w-full bg-bg-default-default-default rounded-xl overflow-hidden border border-bg-default-muted-alpha"
      >
        <figure class="basis-[88px]">
          <img class="w-full" src={parsePoster(movie.poster_path, POSTER_SIZES.enum.w342)} alt="" />
        </figure>

        <article class="flex flex-col flex-1 py-2 px-3 items-stretch">
          <div class="flex-col gap-1">
            <span class="text-t100 text-text-default-strong">{movie.title}</span>
            <ReleasedDateAndRating {movie} />
            <p class="text-t100 text-text-default-default line-clamp-2">{movie.overview}</p>
          </div>

          <div class="mt-auto flex items-center gap-2 ">
            <span class="text-t100 text-text-default-muted">Watch on:</span>
            <div class="w-5 h-5 bg-red-50" />
          </div>
        </article>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .scroll-area {
    height: calc(100vh - 145px);
    @apply overflow-y-auto;
  }
</style>
