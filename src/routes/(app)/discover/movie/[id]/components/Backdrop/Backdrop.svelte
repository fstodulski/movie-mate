<script lang="ts">
  import { page } from '$app/stores';

  import { BACKDROP_SIZES, parsePoster } from '$lib/core/utils/poster';

  import Trailer from '../Trailer/Trailer.svelte';

  let movie: any;
  let isMoviePlaying = false;

  $: movie = $page.data.movie.data;
</script>

<figure class="w-full relative">
  <Trailer on:play={() => (isMoviePlaying = true)} />
  <img
    class:opacity-0={isMoviePlaying}
    class="absolute top-0 left-0 duration-300 h-full"
    src={parsePoster(movie.backdrop_path, BACKDROP_SIZES.enum.original)}
    alt=""
  />

  <div
    class="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-bl from-black via-black to-sky-900 opacity-60 pointer-events-none"
  />
</figure>
