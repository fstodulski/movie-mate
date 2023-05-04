<script lang="ts">
  import { page } from '$app/stores';

  import ReleasedDateAndRating from '$lib/components/Movie/ReleasedDateAndRating.svelte';

  let movie: any;

  $: movie = $page.data.movie.data;
</script>

<div class="flex flex-col mb-2 px-3">
  <h1 class="text-h500 text-text-light-strong">{movie.original_title}</h1>
  <ReleasedDateAndRating {movie} />
</div>
