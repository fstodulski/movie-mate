<script lang="ts">
  import { page } from '$app/stores';
  import { Select } from 'flowbite-svelte';
  import { isEmpty } from 'ramda';

  import { groupBy } from '$lib/core/utils/group-by';
  import { LOGO_SIZES, parsePoster } from '$lib/core/utils/poster';

  let selected: any;
  let providers: any;

  const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];

  const keys = ['Stream', 'Rent', 'Buy'];

  $: providers = groupBy($page.data.providers, 'type');
</script>

<div class="flex w-full items-start justify-between px-4 pt-8 mb-4">
  <div class="flex flex-col">
    <h4 class="text-h400 text-text-light-strong">Available On</h4>
    <span class="text-t100 text-text-light-muted">(In your watch region)</span>
  </div>

  <div class="flex">
    <Select class="mt-2" items={countries} bind:value={selected} />
  </div>
</div>

<div class="flex flex-col gap-2">
  {#each keys as key, index}
    {#if providers[key]}
      {#if !isEmpty(providers[key])}
        <div class="flex w-full px-4 overflow-x-auto scrollbar-hide">
          <div
            class="provider-label flex justify-center py-3 px-1 rounded-md {index === 0
              ? 'bg-background-dark-strong-alpha/[0.32]'
              : 'bg-background-dark-muted-alpha/[0.16]'}"
          >
            <span class="text-text-light-strong text-center text-h100 uppercase">{key}</span>
          </div>

          <ul class="flex pl-4">
            {#each providers[key] as stream}
              <li
                class="flex px-4 pt-2 pb-2 border-b border-border-default-muted-alpha/[0.32] justify-center items-center flex-col gap-1"
              >
                <div class="w-12 h-12 rounded-md overflow-hidden">
                  <a href={stream.provider_url} target="_blank" rel="noreferrer">
                    <img src={parsePoster(stream.image_url, LOGO_SIZES.enum.w45)} alt="" />
                  </a>
                </div>
                <div class="flex gap-1">
                  <span class="text-t100 text-text-light-strong">
                    {stream.price}
                  </span>

                  <span class="text-t100 text-text-action-caution">
                    {stream.presentation_type}
                  </span>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    {/if}
  {/each}
</div>

<style lang="scss">
  .provider-label {
    line-height: 1;
    position: relative;
    transform: rotate(180deg);
    white-space: nowrap;
    writing-mode: vertical-rl;
  }
</style>
