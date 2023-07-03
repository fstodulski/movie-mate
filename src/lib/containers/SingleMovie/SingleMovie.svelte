<script lang="ts">
  import DownloadTheApp from '$lib/components/DownloadTheApp/DownloadTheApp.svelte';
  import Backdrop from '$lib/containers/SingleMovie/components/Backdrop/Backdrop.svelte';
  import Credits from '$lib/containers/SingleMovie/components/Credits/Credits.svelte';
  import Metadata from '$lib/containers/SingleMovie/components/Metadata/Metadata.svelte';
  import MovieDetails from '$lib/containers/SingleMovie/components/MovieDetails/MovieDetails.svelte';
  import Review from '$lib/containers/SingleMovie/components/Review/Review.svelte';
  import Actions from '$lib/containers/SingleMovie/containers/Actions/Actions.svelte';
  import StreamProviders from '$lib/containers/SingleMovie/containers/StreamProviders/StreamProviders.svelte';
  // import Credits from '$lib/containers/SingleMovie/components/Credits/Credits.svelte';
  // import MovieDetails from '$lib/containers/SingleMovie/components/MovieDetails/MovieDetails.svelte';
  // import Review from '$lib/containers/SingleMovie/components/Review/Review.svelte';
  // import StreamProviders from '$lib/containers/SingleMovie/components/StreamProviders/StreamProviders.svelte';
  // import Actions from '$lib/containers/SingleMovie/containers/Actions/Actions.svelte';
  import type { Credit } from '$lib/core/models/credit.model';
  import type { Movie } from '$lib/core/models/movie.model';
  import type { Provider } from '$lib/core/models/provider.model';
  import type { Trailer } from '$lib/core/models/trailer.model';

  export let data: {
    movie: Promise<Partial<Movie>>;
    trailers: Promise<Array<Trailer>>;
    providers: Array<Provider>;
    movieStatus: any;
    credits: {
      cast: Array<Credit>;
      crew: Array<Credit>;
    };
  };
</script>

<div class="w-full flex flex-col pb-20">
  <Backdrop
    data={{
      movie: data.movie,
      trailers: data.trailers
    }}
  />
  <div class="flex flex-col w-full py-3">
    {#await data.movie then data}
      {#if data.movie}
        <Metadata data={data.movie} />
      {:else}
        Error
      {/if}
    {/await}
    <Actions
      data={{
        movie: data.movie,
        movieStatus: data.movieStatus
      }}
    />
    <Review data={data.movie} />
    <StreamProviders
      data={{
        movie: data.movie,
        providers: data.providers
      }}
    />
    <Credits data={data.credits} />
    <MovieDetails
      data={{
        movie: data.movie,
        credits: data.credits
      }}
    />
    <DownloadTheApp />
  </div>
</div>
