<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Button, Input } from 'flowbite-svelte';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  let innerHeight: number;
  let clientHeight: number;
  let searchInput: HTMLInputElement;

  $: clientHeight = innerHeight - 100;

  let history: Array<any> = [];

  let name: string;
  const handleSubmit = async () => {
    await goto(`?query=${encodeURIComponent(name.trim())}`, {
      keepFocus: true
    });
  };

  const select = async (query: string) => {
    name = query;
    await handleSubmit();
  };

  onMount(() => {
    searchInput.focus();

    if ($page.data.movies.results.length > 0) {
      name = $page.url.searchParams.get('query');
    }

    if (browser) {
    }
  });

  onDestroy(() => {});
</script>

<svelte:window bind:innerHeight />

<aside class="fixed top-0 left-0 w-full h-screen bg-bg-default-muted-default z-50 px-4 py-4">
  <form
    use:enhance
    method="POST"
    action="?/search"
    in:fly={{ y: 50, duration: 400 }}
    class="flex w-full gap-2 items-center"
    on:submit={handleSubmit}
  >
    <Input
      bind:this={searchInput}
      type="text"
      name="query"
      class="!bg-bg-default-muted-alpha !border-bg-default-muted-alpha !text-bg-default-muted-default grow"
      placeholder="Movie name"
    >
      <Icon slot="left" src={Search2} size="20px" />
    </Input>
    <Button color="light" type="button" class="" href={APP_ROUTES.discover.index}>Cancel</Button>
  </form>

  {#if !name}
    <div class="flex flex-col w-full mt-2 gap-3">
      {#each history as query}
        <span class="py-2 bg-gray-300 px-1 rounded-md" on:click={() => select(query)}>{query}</span>
      {/each}
    </div>
  {/if}
</aside>
