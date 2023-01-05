<script lang="ts">
  import { page } from '$app/stores';
  import { filter } from 'ramda';

  const includesTrailer = (video) => video.name.toLowerCase().includes('trailer');
  const trailerSrs = filter(includesTrailer, $page.data.movie.videos);

  let trailerKey = trailerSrs[0].key || $page.data.movie.videos[0].key;
</script>

<div class="flex flex-col">
  <h3 class="text-3xl">Trailer</h3>

  <iframe height="250" src="https://www.youtube.com/embed/{trailerKey}?controls=0" />
</div>
