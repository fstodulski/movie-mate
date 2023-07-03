<script lang="ts">
  import { page } from '$app/stores';
  import { isEmpty } from 'ramda';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import GenreBox from './GenreBox.svelte';
</script>

<section class="flex flex-col gap-4 mt-6">
  <h2 class="text-h300 text-text-light-strong">Browse Everything</h2>

  {#await $page.data.genres}
    {#each { length: 8 } as _, index}
      <GenreBox />
    {/each}
  {:then { genres }}
    <div class="grid grid-cols-2 gap-3 pb-20">
      {#if genres && !isEmpty(genres)}
        {#each genres as genre}
          <a href={APP_ROUTES.discover.genre.single.replace(':id', genre.tmdb_id)} c>
            <GenreBox {genre} />
          </a>
        {/each}
      {/if}
    </div>
  {/await}
</section>
