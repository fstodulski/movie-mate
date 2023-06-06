<script lang="ts">
  import TrailerVideoPlayer from '$lib/containers/SingleMovie/components/TrailerVideoPlayer/TrailerVideoPlayer.svelte';
  import type { Movie } from '$lib/core/models/movie.model';
  import type { Trailer } from '$lib/core/models/trailer.model';
  import { BACKDROP_SIZES, parsePoster } from '$lib/core/utils/poster';

  export let data: {
    movie: Partial<Movie>;
    trailers: Array<Trailer>;
  };

  let trailers: any;
  let isMoviePlaying = false;
  let isMoviePaused = false;

  $: trailers = data.trailers.filter(({ name }) => name.toLowerCase().includes('trailer'));
</script>

<figure class="w-full sticky top-0 md:relative z-10">
  <TrailerVideoPlayer
    data={{
      src: trailers[0]?.key
    }}
    on:paused={() => (isMoviePaused = true)}
    on:end={() => (isMoviePlaying = false)}
    on:play={() => {
      isMoviePlaying = true;
      isMoviePaused = false;
    }}
  />
  <img
    class:opacity-0={isMoviePlaying}
    class="absolute top-0 pointer-events-none w-full object-cover left-0 duration-300 h-full z-0"
    src={parsePoster(data.movie.backdrop_path, BACKDROP_SIZES.enum.original)}
    alt=""
  />

  <div
    class:opacity-0={isMoviePlaying}
    class:opacity-60={!isMoviePlaying || isMoviePaused}
    class="absolute pointer-events-none top-0 left-0 w-full h-full z-0 bg-gradient-to-bl from-black via-black to-sky-900"
  />
</figure>
