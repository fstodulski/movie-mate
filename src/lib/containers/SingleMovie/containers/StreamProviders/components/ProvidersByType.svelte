<script lang="ts">
  import { onMount } from 'svelte';
  import { isEmpty } from 'ramda';

  import type { Provider } from '$lib/core/models/provider.model';
  import { groupBy } from '$lib/core/utils/group-by';
  import { LOGO_SIZES, parsePoster } from '$lib/core/utils/poster';

  export let data: Array<Provider>;
  let providers: Array<any> = [];

  const keys = ['Stream', 'Rent', 'Buy'];

  const getProviders = () => {
    if (!isEmpty(data)) {
      return groupBy(data, 'type');
    }
    return keys.map((key) => ({ [key]: [] }));
  };

  onMount(() => {
    providers = getProviders();
  });
</script>

<div class="flex flex-col gap-2">
  {#each keys as key, index}
    {#if providers[key]}
      {#if !isEmpty(providers[key])}
        <div class="flex w-full px-4 relative z-0">
          <div
            class="provider-label flex justify-center py-3 px-1 rounded-md {index === 0
              ? 'bg-background-dark-strong-alpha/[0.32]'
              : 'bg-background-dark-muted-alpha/[0.16]'}"
          >
            <span class="text-text-light-strong text-center text-h100 uppercase">{key}</span>
          </div>

          <ul class="flex pl-4 overflow-x-auto scrollbar-hide relative z-[5]">
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
