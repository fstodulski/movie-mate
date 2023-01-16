<script lang="ts">
  import { page } from '$app/stores';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import { BACKDROP_SIZES, parsePoster } from '$lib/core/utils/poster';
</script>

<div class="flex flex-col w-full px-2 gap-5 pb-10">
  {#each $page.data.mostPopular.results as movie, index}
    <a class="flex items-start gap-4" href={APP_ROUTES.discover.movie.replace(':id', movie.id)}>
      <div class="flex flex-col min-w-[40px]">
        <span class="text-3xl font-bold">{index + 1}</span>
      </div>
      <div class="flex flex-col gap-2">
        <figure class="w-full overflow-hidden rounded-md">
          <img
            class="w-full"
            src={parsePoster(movie.backdrop_path, BACKDROP_SIZES.enum.w780)}
            alt=""
          />
        </figure>

        <h3 class="text-2xl">{movie.original_title}</h3>
      </div>
    </a>
  {/each}
</div>
