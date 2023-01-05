<script lang="ts">
  import Actions from '$lib/views/movie/components/Actions/Actions.svelte';
  import Backdrop from '$lib/views/movie/components/Backdrop/Backdrop.svelte';
  import Metadata from '$lib/views/movie/components/Metadata/Metadata.svelte';
  import Review from '$lib/views/movie/components/Review/Review.svelte';
  import StreamProviders from '$lib/views/movie/components/StreamProviders/StreamProviders.svelte';
  import Trailer from '$lib/views/movie/components/Trailer/Trailer.svelte';
</script>

<div class="w-full flex flex-col pb-20">
  <Backdrop />

  <div class="px-3 flex flex-col w-full py-4 gap-6">
    <Metadata />
    <Actions />
    <Trailer />
    <Review />
    <StreamProviders />
  </div>
</div>
