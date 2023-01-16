<script lang="ts">
  import { Button } from 'flowbite-svelte';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
</script>

<div class="w-full flex flex-col items-center gap-3 pt-24 justify-center">
  <figure class="w-40 h-40 bg-gray-500" />

  <h3 class="text-2xl font-bold text-center">
    <slot name="title" />
  </h3>

  <span class="text-center uppercase">
    <slot name="span" />
  </span>

  <Button>Talk to MovieMate</Button>

  <a href={APP_ROUTES.discover.search}> Search Manually</a>
</div>
