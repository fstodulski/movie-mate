<script lang="ts">
  import { page } from '$app/stores';

  import MoviePosterIcon from '$lib/components/Movie/MoviePosterIcon.svelte';
</script>

<div class="flex gap-3 items-start">
  <MoviePosterIcon />

  <div class="flex flex-col grow">
    <span class="text-t200 font-bold text-text-light-strong">{$page.data.movie.original_title}</span
    >
    <span class="text-t200 text-text-light-default w-3/4">
      Added already watched movie to a watchlist
    </span>
  </div>
</div>
