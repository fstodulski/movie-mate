<script lang="ts">
  import type { Movie } from '$lib/core/models/movie.model';

  export let data: Partial<Movie>;
</script>

<div class="flex text-t100 text-text-light-muted gap-1">
  <span>{new Date(data?.release_date).getFullYear()}</span>
  {#if data.vote_avarage}
    |
    <span>TMDB {data.vote_average} </span>
  {/if}
</div>
