<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="flex flex-col gap-3">
  <h3 class="text-3xl">IMDB Review</h3>
  <p>{$page.data.movie.overview}</p>
</div>
