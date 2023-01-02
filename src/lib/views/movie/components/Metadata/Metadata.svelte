<script lang="ts">
  import { page } from '$app/stores';

  import { take } from 'ramda';
  let movie: any;

  $: movie = $page.data.movie;
</script>

<div class="flex w-full gap-4">
  <span>
    {take(4, movie.release_date)}
  </span>

  <span>IMBD: {movie.vote_average}</span>
</div>
