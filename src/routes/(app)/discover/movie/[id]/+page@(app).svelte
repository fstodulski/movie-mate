<script lang="ts">
  import { page } from '$app/stores';

  import Actions from './components/Actions/Actions.svelte';
  import Backdrop from './components/Backdrop/Backdrop.svelte';
  import Credits from './components/Credits/Credits.svelte';
  import Metadata from './components/Metadata/Metadata.svelte';
  import MovieDetails from './components/MovieDetails/MovieDetails.svelte';
  import Review from './components/Review/Review.svelte';
  import StreamProviders from './components/StreamProviders/StreamProviders.svelte';
  console.log($page.data.movie.data);
</script>

<div class="w-full flex flex-col pb-20">
  <Backdrop />

  <div class="flex flex-col w-full py-3">
    <Metadata />
    <Actions />
    <Review />

    {#if $page.data.providers.length > 0}
      <StreamProviders />
    {/if}
    <Credits />
    <MovieDetails />
  </div>
</div>
