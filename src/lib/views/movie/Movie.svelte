<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { page } from '$app/stores';

  import { parsePoster } from '$lib/core/utils/poster.js';
  import { MovieService } from '$lib/views/movie/movie.service';
  import { MovieStore } from '$lib/views/movie/movie.store.js';

  onMount(async () => {
    await MovieService.single($page.params.id);
  });

  onDestroy(() => {
    MovieStore.set({});
  });
</script>

<section class="w-full flex flex-col">
  <figure class="w-full">
    <img src={parsePoster($MovieStore.backdrop_path, 'original')} alt="" />
  </figure>
</section>
