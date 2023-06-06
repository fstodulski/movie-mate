<script lang="ts">
  import { page } from '$app/stores';
  import { Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Input } from 'flowbite-svelte';

  import HttpToast from '$lib/components/Toast/HttpToast.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import Genres from './components/Genres/Genres.svelte';
</script>

<section class="flex flex-col px-4 pt-4 bg-bg-default-muted-default">
  <h1 class="text-h600 text-text-light-strong">Search</h1>

  <a class="py-2 w-full flex gap-2 items-center relative" href={APP_ROUTES.discover.search}>
    <div class="flex items-center absolute left-5 gap-2">
      <Icon src={Search2} size="20px" class="text-text-light-muted" />
      <span class="text-text-light-muted text-t300">What you want to watch?</span>
    </div>
    <Input size="sm" readonly class="" />
  </a>
</section>
<main class="flex flex-col max-w-screen-sm mx-auto gap-4 px-4 overflow-auto">
  <Genres />
</main>

{#if $page.data.errors}
  {#each $page.data.errors as error}
    <HttpToast {...error} />
  {/each}
{/if}
