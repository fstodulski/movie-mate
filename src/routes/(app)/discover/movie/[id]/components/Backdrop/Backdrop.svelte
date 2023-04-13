<script lang="ts">
  import { page } from '$app/stores';

  import Trailer from '../Trailer/Trailer.svelte';

  let movie: any;

  $: movie = $page.data.movie;
</script>

<figure class="w-full relative">
  <Trailer />
  <!--  <img src={parsePoster(movie.backdrop_path, BACKDROP_SIZES.enum.original)} alt="" />-->

  <div
    class="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-bl from-black via-black to-sky-900 opacity-60"
  />
</figure>
