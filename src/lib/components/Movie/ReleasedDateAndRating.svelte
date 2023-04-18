<script lang="ts">
  export let movie;
</script>

<div class="flex text-t100 text-text-light-muted gap-1">
  <span>{new Date(movie.release_date).getFullYear()}</span>
  {#if movie.vote_avarage}
    |
    <span>TMDB {movie.vote_average} </span>
  {/if}
</div>
