<script lang="ts">
  import type { Movie } from '$lib/core/models/movie.model';

  export let data: Partial<Movie>;
</script>

<div class="flex flex-col mt-2 px-3">
  <p class="text-t100 text-text-light-default line-clamp-3">{data.overview}</p>
</div>
