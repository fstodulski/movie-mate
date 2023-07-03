<script lang="ts">
  import { Select } from 'flowbite-svelte';
  import { isEmpty } from 'ramda';

  import type { Movie } from '$lib/core/models/movie.model';
  import type { Provider } from '$lib/core/models/provider.model';

  import NoStreamProviders from './components/NoStreamProviders.svelte';
  import ProvidersByType from './components/ProvidersByType.svelte';

  export let data: {
    movie: Promise<Partial<Movie>>;
    providers: Promise<Array<Provider>>;
  };

  let selected: any;

  const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
</script>

{#await data.providers}
  Loading Providers
{:then { providers }}
  <div class="flex w-full items-start justify-between px-4 pt-8 mb-4">
    <div class="flex flex-col">
      <h4 class="text-h400 text-text-light-strong">Available On</h4>
      <span class="text-t100 text-text-light-muted">(In your watch region)</span>
    </div>

    <div class="flex">
      <Select class="mt-2" items={countries} bind:value={selected} />
    </div>
  </div>

  {#if !isEmpty(providers)}
    <ProvidersByType data={providers} />
  {/if}
  {#if isEmpty(providers)}
    <NoStreamProviders data={{ movie: data.movie }} />
  {/if}
{/await}
