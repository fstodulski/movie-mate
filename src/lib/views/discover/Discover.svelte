<script lang="ts">
  import { onMount } from 'svelte';

  import Genres from '$lib/views/discover/containers/Genres/Genres.svelte';
  import MovieSearch from '$lib/views/discover/containers/MovieSearch/MovieSearch.svelte';
  import { Button, Input } from 'flowbite-svelte';

  import { DiscoverService } from './discover.service';

  let isModalVisible = false;

  const _fetchGenres = async () => {
    await DiscoverService.genres();
  };

  onMount(async () => {
    await _fetchGenres();
  });
</script>

<section class="flex flex-col sticky top-10 bg-white z-10">
  <form class="py-2 px-1 w-full flex gap-2 items-center">
    <Input size="sm" on:focus={() => (isModalVisible = true)} readonly />
    <!--    <input class="py-1 px-3 w-full bg-gray-100 rounded-md" />-->
    <Button size="xs">Search</Button>
  </form>
</section>
<main class="flex flex-col max-w-screen-sm mx-auto gap-4 px-2 overflow-auto">
  <Genres />
</main>

{#if isModalVisible}
  <MovieSearch onCancel={() => (isModalVisible = false)} />
{/if}
