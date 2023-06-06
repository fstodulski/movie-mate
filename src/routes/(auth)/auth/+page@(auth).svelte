<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  $: {
    if ($page.url.href.includes('refresh_token')) {
      goto(APP_ROUTES.feed.index);
    }
  }
</script>

<div class="w-full min-h-screen flex justify-center items-center gap-4 px-4 flex-col">
  <h1 class="text-h700 text-text-light-strong">Sign in</h1>
  <form action="?/googleSignIn" method="POST" class="w-full">
    <button class="btn primary xl w-full" type="submit">Sign With Google</button>
  </form>
</div>
