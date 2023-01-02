<script lang="ts">
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const.js';
  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster.js';
  import { take } from 'ramda';

  export let data: any;
</script>

<div class="w-full grid grid-cols-3 rounded-md border border-gray-500 shadow-sm">
  <figure class="col-start-1 col-end-2 overflow-hidden bg-black">
    <a href={APP_ROUTES.discover.movie.replace(':id', data.id)}>
      <img src={parsePoster(data.poster_path, POSTER_SIZES.enum.w154)} alt="" />
    </a>
  </figure>

  <article class="col-start-2 col-end-4 flex flex-col gap-2 p-2">
    <a href={APP_ROUTES.discover.movie.replace(':id', data.id)}>
      <h3>{data.original_title}</h3>

      <div class="flex items-center gap-1">
        <span class="text-xs">{data.release_date}</span>
        <span class="text-xs">TMDB {data.vote_average} </span>
      </div>

      <p class="text-sm">{take(60, data.overview)}...</p>
    </a>

    <div class="flex flex-col">
      <span>Available on:</span>

      <div class="flex items-center gap-1">
        <div class="w-10 h-10 bg-black" />
        <div class="w-10 h-10 bg-black" />
        <div class="w-10 h-10 bg-black" />

        <a href="">and more</a>
      </div>
    </div>
  </article>
</div>
