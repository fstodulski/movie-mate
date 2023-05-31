<script lang="ts">
  import { page } from '$app/stores';

  import DownloadTheApp from '$lib/components/DownloadTheApp/DownloadTheApp.svelte';
  import Backdrop from '$lib/containers/SingleMovie/components/Backdrop/Backdrop.svelte';
  import Credits from '$lib/containers/SingleMovie/components/Credits/Credits.svelte';
  import Metadata from '$lib/containers/SingleMovie/components/Metadata/Metadata.svelte';
  import MovieDetails from '$lib/containers/SingleMovie/components/MovieDetails/MovieDetails.svelte';
  import Review from '$lib/containers/SingleMovie/components/Review/Review.svelte';
  import StreamProviders from '$lib/containers/SingleMovie/components/StreamProviders/StreamProviders.svelte';
  import Actions from '$lib/containers/SingleMovie/containers/Actions/Actions.svelte';
</script>

<div class="w-full flex flex-col pb-20">
  <Backdrop
    data={{
      movie: $page.data.movie,
      trailers: $page.data.trailers
    }}
  />

  <div class="flex flex-col w-full py-3">
    <Metadata data={$page.data.movie} />
    <Actions data={$page.data.movieStatus} />
    <Review data={$page.data.movie} />
    <StreamProviders data={$page.data.providers} />
    <Credits data={$page.data.credits.cast} />
    <MovieDetails
      data={{
        movie: $page.data.movie,
        credits: $page.data.credits
      }}
    />
    <DownloadTheApp />
  </div>
</div>
