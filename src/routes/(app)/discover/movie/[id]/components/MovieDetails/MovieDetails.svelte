<script lang="ts">
  import { page } from '$app/stores';
  import { isNil } from 'ramda';

  import { toMovieDetailsUtils } from './to-movie-details.utils';

  let movieData = toMovieDetailsUtils({ ...$page.data.movie, ...$page.data.credits });
</script>

<section class="px-4 flex flex-col pt-8 gap-4">
  <h3 class="text-h400 text-text-light-strong">Movie details</h3>

  <div class="flex flex-col gap-3">
    {#each Object.keys(movieData) as key}
      {#if !isNil(movieData[key])}
        <div class="grid grid-cols-3">
          <div class="col-start-1 col-end-2">
            <span class="text-t200 font-bold text-text-light-default capitalize">{key}</span>
          </div>
          <div class="col-start-2 col-end-4">
            <span class="text-t200 text-text-light-default">{movieData[key]}</span>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>
