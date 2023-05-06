<script lang="ts">
  import ReleasedDateAndRating from '$lib/components/Movie/ReleasedDateAndRating.svelte';
  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster';

  export let movie;
</script>

<div class="flex w-full bg-background-dark-default-default rounded-xl overflow-hidden border-box">
  <figure class="basis-[88px]">
    <img class="w-full" src={parsePoster(movie.poster_path, POSTER_SIZES.enum.w342)} alt="" />
  </figure>

  <article class="flex flex-col flex-1 py-2 px-3 items-stretch">
    <div class="flex-col gap-1">
      <span class="text-t100 text-text-light-strong">{movie.title}</span>
      <ReleasedDateAndRating {movie} />
      <p class="text-t100 text-text-light-default line-clamp-2">{movie.overview}</p>
    </div>

    <div class="mt-auto flex items-center gap-2">
      <span class="text-t100 text-text-light-muted">Watch on:</span>
      <div class="w-5 h-5 bg-red-50" />
    </div>
  </article>
</div>
