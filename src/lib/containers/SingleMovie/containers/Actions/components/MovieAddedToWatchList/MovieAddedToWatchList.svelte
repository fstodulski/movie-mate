<script lang="ts">
  import MoviePosterIcon from '$lib/components/Movie/MoviePosterIcon.svelte';
  import type { Movie } from '$lib/core/models/movie.model';
  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster';

  export let data: Partial<Movie>;
</script>

<div class="flex gap-3 items-start">
  <MoviePosterIcon src={parsePoster(data.poster_path, POSTER_SIZES.enum.w92)} />

  <div class="flex flex-col grow">
    <span class="text-t200 font-bold text-text-light-strong">{data.original_title}</span>
    <span class="text-t200 text-text-light-default w-3/4"> Marked as movie to watch </span>
  </div>
</div>
