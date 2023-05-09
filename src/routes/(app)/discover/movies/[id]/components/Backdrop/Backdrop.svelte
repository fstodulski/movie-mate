<script lang="ts">
  import { page } from '$app/stores';

  import { BACKDROP_SIZES, parsePoster } from '$lib/core/utils/poster';

  import Trailer from '../Trailer/Trailer.svelte';

  let movie: any;
  let isMoviePlaying = false;
  let isMoviePaused = false;

  $: movie = $page.data.movie;
</script>

<figure class="w-full relative">
  <Trailer
    on:paused={() => (isMoviePaused = true)}
    on:end={() => (isMoviePlaying = false)}
    on:play={() => {
      isMoviePlaying = true;
      isMoviePaused = false;
    }}
  />
  <img
    class:opacity-0={isMoviePlaying}
    class="absolute top-0 pointer-events-none left-0 duration-300 h-full z-0"
    src={parsePoster(movie.backdrop_path, BACKDROP_SIZES.enum.original)}
    alt=""
  />

  <div
    class:opacity-0={isMoviePlaying}
    class:opacity-60={!isMoviePlaying || isMoviePaused}
    class="absolute pointer-events-none top-0 left-0 w-full h-full z-0 bg-gradient-to-bl from-black via-black to-sky-900"
  />
</figure>
