<script lang="ts">
  import { page } from '$app/stores';

  import Actions from './components/Actions/Actions.svelte';
  import Backdrop from './components/Backdrop/Backdrop.svelte';
  import Metadata from './components/Metadata/Metadata.svelte';
  import Review from './components/Review/Review.svelte';
  import StreamProviders from './components/StreamProviders/StreamProviders.svelte';
</script>

<div class="w-full flex flex-col pb-20">
  <Backdrop />

  <div class="px-3 flex flex-col w-full py-4 gap-6">
    <Metadata />
    <Actions />
    <Review />

    {#if $page.data.providers.length > 0}
      <StreamProviders />
    {/if}
  </div>
</div>
