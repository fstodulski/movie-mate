<script lang="ts">
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
</script>

<div
  class="flex items-center overflow-x-auto gap-4 mb-6 scrollbar-hide sticky top-0 z-50 bg-white py-3 pl-2"
>
  <a href={APP_ROUTES.feed.mostPopular} class="badge">Most Popular</a>
  <a href={APP_ROUTES.feed.newestReleases} class="badge">Newest Releases</a>
  <a href={APP_ROUTES.feed.bestReviews} class="badge">Best Reviews</a>
</div>

<slot />

<style lang="scss">
  .badge {
    @apply bg-white p-1 px-2 border border-gray-500 rounded-md shadow-md min-w-[160px] flex items-center;
  }
</style>
