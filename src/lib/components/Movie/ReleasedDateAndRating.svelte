<script lang="ts">
  export let movie;
</script>

<div class="flex text-t100 text-text-default-muted gap-1">
  <span>{new Date(movie.release_date).getFullYear()}</span>
  |
  <span>TMDB {movie.vote_average} </span>
</div>
