<script lang="ts">
  import DownloadTheApp from '$lib/components/DownloadTheApp/DownloadTheApp.svelte';

  import Backdrop from './components/Backdrop/Backdrop.svelte';
  import Credits from './components/Credits/Credits.svelte';
  import Metadata from './components/Metadata/Metadata.svelte';
  import MovieDetails from './components/MovieDetails/MovieDetails.svelte';
  import Review from './components/Review/Review.svelte';
  import StreamProviders from './components/StreamProviders/StreamProviders.svelte';
  import Actions from './containers/Actions/Actions.svelte';
</script>

<div class="w-full flex flex-col pb-20">
  <Backdrop />
  <div class="flex flex-col w-full py-3">
    <Metadata />
    <Actions />
    <Review />
    <StreamProviders />
    <Credits />
    <MovieDetails />
    <DownloadTheApp />
  </div>
</div>
