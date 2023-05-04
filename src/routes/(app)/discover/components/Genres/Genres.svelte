<script lang="ts">
  import { page } from '$app/stores';
  import { isEmpty } from 'ramda';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster';
</script>

<section class="flex flex-col gap-4 mt-6">
  <h2 class="text-h300 text-text-light-strong">Browse Everything</h2>

  <div class="grid grid-cols-2 gap-3 pb-20">
    {#if !isEmpty($page.data.genres)}
      {#each $page.data.genres as genre}
        <a href={APP_ROUTES.discover.genre.single.replace(':id', genre.tmdb_id)} c>
          <div
            class="relative overflow-hidden h-[100px] rounded-lg"
            style="background-color: {genre.color}"
          >
            <figure
              class="overflow-hidden rounded-md absolute top-4 right-0 z-0 h-[96px] w-[64px] rotate-[20deg]"
            >
              <img
                class="w-full h-full object-cover"
                src={parsePoster(genre.backdrop_path, POSTER_SIZES.enum.w500)}
                alt=""
              />
            </figure>

            <span class="text-h300 text-text-light-strong absolute top-2 left-2">{genre.name}</span>
          </div>
        </a>
      {/each}
    {/if}
  </div>
</section>
