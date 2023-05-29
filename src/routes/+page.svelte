<script lang="ts">
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
</script>

<div class="flex w-full min-h-screen justify-center items-center">
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-h800 font-bold text-white">We build Something cool here</h1>

    <span class="text-t200 text-text-light-muted">Follow Us!</span>

    <a class="text-white text-t200" href={APP_ROUTES.feed.index}>See it</a>
  </div>
</div>
