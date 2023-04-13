<script lang="ts">
  import { page } from '$app/stores';

  import ReleasedDateAndRating from '$lib/components/Movie/ReleasedDateAndRating.svelte';
  let movie: any;

  $: movie = $page.data.movie;
</script>

<ReleasedDateAndRating {movie} />
