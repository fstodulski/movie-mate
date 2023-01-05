<script lang="ts">
  import { Button, Input } from 'flowbite-svelte';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import Genres from '$lib/views/discover/components/genres/Genres.svelte';
</script>

<section class="flex flex-col sticky top-0 bg-white z-50">
  <a class="py-2 px-1 w-full flex gap-2 items-center" href={APP_ROUTES.discover.search}>
    <Input size="sm" readonly />
    <!--    <input class="py-1 px-3 w-full bg-gray-100 rounded-md" />-->
    <Button size="xs">Search</Button>
  </a>
</section>
<main class="flex flex-col max-w-screen-sm mx-auto gap-4 px-2 overflow-auto">
  <Genres />
</main>
