<script lang="ts">
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { Button } from 'flowbite-svelte';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  $: {
    console.log(JSON.stringify($page.url.href));
    if ($page.url.href.includes('refresh_token')) {
      goto(APP_ROUTES.feed.index);
    }
  }
</script>

<div class="w-full min-h-screen flex justify-center items-center">
  <form action="?/googleSignIn" method="POST" use:enhance>
    <Button type="submit">Sign With Google</Button>
  </form>
</div>
