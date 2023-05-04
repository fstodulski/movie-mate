<script lang="ts">
  import { page } from '$app/stores';
  import { isEmpty } from 'ramda';

  import { parsePoster, PROFILE_SIZES } from '$lib/core/utils/poster';
</script>

<section class="flex flex-col pt-8 pb-4 gap-4">
  <div class="flex flex-col px-3">
    <h4 class="text-h400 text-text-light-strong">Cast</h4>
    <span class="text-t100 text-text-light-muted">(Top billed actors)</span>
  </div>

  <div class="flex overflow-x-auto scrollbar-hide snap-x">
    {#await $page.data.credits}
      Loading
    {:then}
      {#if !isEmpty($page.data.credits.data.cast)}
        {#each $page.data.credits.data.cast as cast}
          <figure
            class="h-[225px] ml-4 w-[138px] bg-background-dark-default-default rounded-md flex-1 grow flex-none overflow-hidden"
          >
            <img
              class="h-[175px] w-full object-cover"
              src={parsePoster(cast.profile_path, PROFILE_SIZES.enum.original)}
              alt=""
            />
            <figcaption class="flex flex-col p-2 gap-1/2">
              <span class="text-t100 font-bold text-text-light-strong">
                {cast.original_name}
              </span>
              <span class="text-t100 text-text-light-muted whitespace-nowrap text-ellipsis"
                >{cast.character}</span
              >
            </figcaption>
          </figure>
        {/each}
      {/if}
    {/await}
  </div>
</section>
