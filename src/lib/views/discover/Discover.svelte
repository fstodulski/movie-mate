<script lang="ts">
  import { Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Input } from 'flowbite-svelte';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import Genres from '$lib/views/discover/components/genres/Genres.svelte';
</script>

<section class="flex flex-col px-4 pt-4 bg-bg-default-muted-default">
  <h1 class="text-h600 text-text-default-strong">Search</h1>

  <a class="py-2 w-full flex gap-2 items-center relative" href={APP_ROUTES.discover.search}>
    <div class="flex items-center absolute left-5 gap-2">
      <Icon src={Search2} size="20px" class="text-text-default-muted" />
      <span class="text-text-default-muted text-t300">What you want to watch?</span>
    </div>
    <Input
      size="sm"
      readonly
      class="bg-bg-default-muted-alpha border-bg-default-muted-alpha text-bg-default-muted-default"
    />
  </a>
</section>
<main class="flex flex-col max-w-screen-sm mx-auto gap-4 px-4 overflow-auto">
  <Genres />
</main>
