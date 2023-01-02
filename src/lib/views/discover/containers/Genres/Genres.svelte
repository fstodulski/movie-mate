<script lang="ts">
  import { onMount } from 'svelte';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const.js';
  import { GenresStore } from '$lib/views/discover/containers/Genres/genres.store.js';

  import { GenresService } from './genres.service';

  const _getAll = async () => {
    await GenresService.all();
  };

  onMount(async () => {
    await _getAll();
  });
</script>

<section class="flex flex-col gap-4">
  <h2 class="text-3xl">Browse Everything</h2>

  <div class="grid grid-cols-2 gap-3">
    {#each $GenresStore as genre}
      <a href={APP_ROUTES.discover.movie.replace(':id', genre.id)}>
        <div class="relative h-36">
          <figure class="overflow-hidden rounded-md absolute w-full h-full z-0">
            <div class="bg-black/30 absolute w-full h-full top-0 left-0" />
            <img class="w-full h-full object-cover" src={genre.poster} alt="" />
          </figure>

          <span class="text-2xl absolute top-2 left-1 text-white">{genre.name}</span>
        </div>
      </a>
    {/each}
  </div>
</section>
