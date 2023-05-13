<script lang="ts">
  import EmptyStatePlaceholder from '$lib/components/EmptyStatePlaceholder/EmptyStatePlaceholder.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
</script>

<EmptyStatePlaceholder size="md">
  <svelte:fragment slot="title">
    <span class="text-h800 text-text-light-strong">
      Create your own personalized watchlist for free with Moviemate
    </span>
  </svelte:fragment>

  <svelte:fragment slot="cta">
    <a href={APP_ROUTES.auth.index} class="btn primary xl w-full"> Sign up FREE </a>
  </svelte:fragment>

  <svelte:fragment slot="footer">
    <span class="text-t300 text-text-light-default">Already have an account?</span>
    <a class="btn tertiary xl" href={APP_ROUTES.auth.index}>Log in</a>
  </svelte:fragment>
</EmptyStatePlaceholder>
