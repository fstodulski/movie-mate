<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { Bookmark } from '@steeze-ui/remix-icons';
  import type { IconSource } from '@steeze-ui/remix-icons/types';
  import { Icon } from '@steeze-ui/svelte-icon';

  import ReleasedDateAndRating from '$lib/components/Movie/ReleasedDateAndRating.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const.js';
  import { BACKDROP_SIZES, parsePoster } from '$lib/core/utils/poster';

  export let movies;
  export let icon: IconSource;
  export let title: string;
  export let titleId: string;
  export let iconCSS: string;

  let element;

  const onIntersect = () => {
    // goto(`#${titleId}`);
  };
</script>

<IntersectionObserver {element} on:intersect={onIntersect}>
  <div class="flex items-center gap-2 px-4 pb-6" bind:this={element}>
    <Icon src={icon} size="20px" theme="solid" class={iconCSS} />
    <span id={titleId} class="whitespace-nowrap text-text-default-strong text-h400">{title} </span>
  </div>

  <div class="flex flex-col w-full px-4 gap-5 pb-10">
    {#each movies as movie, index}
      <a class="flex items-start gap-4" href={APP_ROUTES.discover.movie.replace(':id', movie.id)}>
        <div class="flex flex-col ">
          <span class="font-bold text-h700 text-text-default-strong"
            >{index + 1 < 10 ? 0 : ''}{index + 1}</span
          >
        </div>
        <div class="flex flex-col gap-2">
          <figure class="w-full overflow-hidden rounded-md h-[196px]">
            <img
              class="w-full h-full object-cover"
              src={parsePoster(movie.backdrop_path, BACKDROP_SIZES.enum.w780)}
              alt=""
            />
          </figure>

          <div class="flex w-full justify-between">
            <div class="flex">
              <span class="text-t100 text-text-default-muted">Watch on </span>
            </div>

            <button class="flex items-center text-t100 text-text-default-strong gap-2"
              ><Icon src={Bookmark} size="16px" />Add to watchlist</button
            >
          </div>

          <article class="flex flex-col">
            <h3 class="text-h300 text-text-default-strong">{movie.original_title}</h3>
            <ReleasedDateAndRating {movie} />
            <p class="text-t100 text-text-default-default line-clamp-2">{movie.overview}</p>
          </article>
        </div>
      </a>
    {/each}
  </div>
</IntersectionObserver>