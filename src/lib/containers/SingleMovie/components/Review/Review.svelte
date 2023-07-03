<script lang="ts">
  import ArticleSkeleton from '$lib/components/Skeleton/ArticleSkeleton/ArticleSkeleton.svelte';
  import type { Movie } from '$lib/core/models/movie.model';

  export let data: Promise<Partial<Movie>>;

  let isVisibleFull = false;

  const toggle = () => {
    isVisibleFull = !isVisibleFull;
  };
</script>

<div class="flex flex-col mt-2 px-3">
  {#await data}
    <ArticleSkeleton rows="3" />
  {:then { movie }}
    <p class="text-t100 text-text-light-default" class:line-clamp-3={!isVisibleFull}>
      {movie.overview}
    </p>
    <span class="text-t100 text-text-action-primary" on:click={toggle}>
      Show {isVisibleFull ? 'less' : 'more'}
    </span>
  {/await}
</div>
