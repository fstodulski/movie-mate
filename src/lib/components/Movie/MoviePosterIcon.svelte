<script lang="ts">
  import { page } from '$app/stores';

  import { parsePoster, POSTER_SIZES } from '$lib/core/utils/poster.js';

  export let src;

  let imgSrc: string;

  $: imgSrc = src
    ? src
    : $page.data.movie.poster_path
    ? parsePoster($page.data.movie.poster_path, POSTER_SIZES.enum.w92)
    : '';
</script>

<figure class="w-6 h-6 overflow-hidden rounded-md">
  <img src={imgSrc} alt="" />
</figure>
