<script lang="ts">
  import ReleasedDateAndRating from '$lib/components/Movie/ReleasedDateAndRating.svelte';
  import type { Movie } from '$lib/core/models/movie.model';

  export let data: Partial<Movie>;
</script>

<div class="flex flex-col mb-2 px-3">
  <h1 class="text-h500 text-text-light-strong">{data.original_title}</h1>
  <ReleasedDateAndRating {data} />
</div>
