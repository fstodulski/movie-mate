<script lang="ts">
  import type { GenreModel } from '$lib/core/models/genre.model';
  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster';

  export let genre: GenreModel;
</script>

<div
  class="relative overflow-hidden h-[100px] rounded-lg"
  class:bg-placeholder-default={!genre}
  style="background-color: {genre && genre.color}"
>
  {#if genre}
    <figure
      class="overflow-hidden rounded-md absolute top-4 right-0 z-0 h-[96px] w-[64px] rotate-[20deg]"
    >
      <img
        class="w-full h-full object-cover"
        src={parsePoster(genre.backdrop_path, POSTER_SIZES.enum.w500)}
        alt=""
      />
    </figure>

    <span class="text-h300 text-text-light-strong absolute top-2 left-2">{genre.name}</span>
  {/if}
</div>
