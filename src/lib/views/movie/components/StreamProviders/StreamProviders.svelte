<script lang="ts">
  import { page } from '$app/stores';

  import { Select } from 'flowbite-svelte';

  let selected: any;

  const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];

  console.log($page.data.providers);
</script>

<div class="flex w-full items-start justify-between">
  <div class="flex flex-col">
    <h4 class="text-2xl">Available On</h4>
    <span class="text-sm">Watch in your region on:</span>
  </div>

  <div class="flex">
    <Select class="mt-2" items={countries} bind:value={selected} />
  </div>
</div>

<ul class="flex w-full gap-4">
  {#each $page.data.providers as provider}
    <li class="w-16 h-16 bg-gray-200 rounded-md">
      <a href={provider.provider} target="_blank" rel="noreferrer">
        <img src={provider.img} alt="" />
      </a>
    </li>
  {/each}
</ul>
