<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="flex flex-col mt-2 px-3">
  <p class="text-t100 text-text-light-default line-clamp-3">{$page.data.movie.data.overview}</p>
</div>
