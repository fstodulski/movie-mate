<script lang="ts">
  import { page } from '$app/stores';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  let genreId: string;

  $: genreId = $page.params.id;
</script>

<div
  class="flex items-center overflow-x-auto gap-4 mb-6 scrollbar-hide sticky top-0 z-50 bg-white py-3 pl-2"
>
  <a href={APP_ROUTES.discover.genre.everyoneWatch.replace(':id', genreId)} class="badge"
    >Everyone Watch</a
  >
  <a href={APP_ROUTES.discover.genre.topTen.replace(':id', genreId)} class="badge">Top 10 Movies</a>
  <a href={APP_ROUTES.discover.genre.upcoming.replace(':id', genreId)} class="badge">Upcoming</a>
</div>

<slot />

<style lang="scss">
  .badge {
    @apply bg-white p-1 px-2 border border-gray-500 rounded-md shadow-md min-w-[160px] flex items-center;
  }
</style>
