<script lang="ts">
  import { page } from '$app/stores';
  import { CheckCircle } from '@steeze-ui/heroicons';
  import { Bookmark } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
  import SegmentButton from '$lib/components/SegmentedControl/SegmentButton/SegmentButton.svelte';
  import SegmentedControl from '$lib/components/SegmentedControl/SegmentedControl.svelte';
  import StickyHeader from '$lib/components/StickyHeader.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  let innerHeight: number;

  let clientHeight: number;
  let toWatchPath: boolean;
  let watched: boolean;

  $: clientHeight = innerHeight - 60;
  $: toWatchPath = $page.route.id === '/(app)/watchlist/to-watch';
  $: watched = $page.route.id === '/(app)/watchlist/watched';
  $: {
    console.log(toWatchPath, watched);
  }
</script>

<svelte:window bind:innerHeight />

<StickyHeader>
  <PageTitle>Watchlist</PageTitle>
</StickyHeader>

<main
  style="height: {clientHeight}px;"
  class="flex flex-col max-w-screen-sm mx-auto gap-4 px-4 pt-2"
>
  <SegmentedControl>
    <SegmentButton active={toWatchPath}>
      <a href={APP_ROUTES.watchlist.toWatch}>To watch</a>
      <Icon src={Bookmark} size="20px" theme="solid" />
    </SegmentButton>
    <SegmentButton active={watched}>
      <a href={APP_ROUTES.watchlist.watched}>Watched</a>
      <Icon src={CheckCircle} size="20px" />
    </SegmentButton>
  </SegmentedControl>

  <slot />
</main>

<style lang="scss">
</style>
