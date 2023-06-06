<script lang="ts">
  import { page } from '$app/stores';

  import SingleMovie from '$lib/containers/SingleMovie/SingleMovie.svelte';
</script>

<SingleMovie
  data={{
    movie: $page.data.movie,
    movieStatus: $page.data.movieStatus,
    credits: $page.data.credits,
    providers: $page.data.providers,
    trailers: $page.data.trailers
  }}
/>
