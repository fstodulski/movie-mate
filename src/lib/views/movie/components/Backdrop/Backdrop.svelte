<script lang="ts">
  import { page } from '$app/stores';

  import { BACKDROP_SIZES, parsePoster } from '$lib/core/utils/poster.js';

  let movie: any;

  $: movie = $page.data.movie;
</script>

<figure class="w-full relative">
  <img src={parsePoster(movie.backdrop_path, BACKDROP_SIZES.enum.original)} alt="" />

  <div
    class="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-bl from-black via-black to-sky-900 opacity-60"
  />
  <h1 class="absolute bottom-3 left-3 z-10 text-white text-4xl">
    {movie.original_title}
  </h1>
</figure>
