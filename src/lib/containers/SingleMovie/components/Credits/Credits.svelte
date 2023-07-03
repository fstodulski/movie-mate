<script lang="ts">
  import { isEmpty } from 'ramda';

  import type { Credit } from '$lib/core/models/credit.model';
  import { parsePoster, PROFILE_SIZES } from '$lib/core/utils/poster';

  export let data: Promise<Array<Credit>>;
</script>

<section class="flex flex-col pt-8 pb-4 gap-4">
  <div class="flex flex-col px-3">
    <h4 class="text-h400 text-text-light-strong">Cast</h4>
    <span class="text-t100 text-text-light-muted">(Top billed actors)</span>
  </div>

  <div class="flex overflow-x-auto scrollbar-hide snap-x">
    {#await data then { credits }}
      {#if credits && !isEmpty(credits.cast)}
        {#each credits.cast as person}
          <figure
            class="h-[225px] ml-4 w-[138px] bg-background-dark-default-default rounded-md grow flex-none overflow-hidden"
          >
            <img
              class="h-[175px] w-full object-cover"
              src={parsePoster(person.profile_path, PROFILE_SIZES.enum.w185)}
              alt=""
            />
            <figcaption class="flex flex-col p-2 gap-1/2">
              <span class="text-t100 font-bold text-text-light-strong">
                {person.original_name}
              </span>
              <span class="text-t100 text-text-light-muted whitespace-nowrap text-ellipsis"
                >{person.character}</span
              >
            </figcaption>
          </figure>
        {/each}
      {/if}
    {/await}
  </div>
</section>
