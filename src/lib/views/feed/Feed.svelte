<script lang="ts">
  import { page } from '$app/stores';

  import { BACKDROP_SIZES, parsePoster } from '$lib/core/utils/poster.js';
</script>

<div
  class="flex items-center overflow-x-auto gap-4 mb-6 scrollbar-hide sticky top-0 z-50 bg-white py-3 pl-2"
>
  <div class="badge">Most Popular</div>
  <div class="badge">Newest Releases</div>
  <div class="badge">Best Reviews</div>
</div>

<div class="flex flex-col w-full px-2 gap-5">
  {#each $page.data.mostPopular.results as movie, index}
    <div class="flex items-start">
      <div class="flex flex-col">
        <span class="text-3xl font-bold">{index + 1}</span>
      </div>
      <div class="flex flex-col pl-4 gap-2">
        <figure class="w-full overflow-hidden rounded-md">
          <img
            class="w-full"
            src={parsePoster(movie.backdrop_path, BACKDROP_SIZES.enum.w780)}
            alt=""
          />
        </figure>

        <h3 class="text-2xl">{movie.original_title}</h3>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .badge {
    @apply bg-white p-1 px-2 border border-gray-500 rounded-md shadow-md min-w-[160px] flex items-center;
  }
</style>
