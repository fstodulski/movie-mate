<script lang="ts">
  import { page } from '$app/stores';

  import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
  import StickyHeader from '$lib/components/StickyHeader.svelte';
  import FeedNavigation from '$lib/containers/Feed/components/FeedNavigation.svelte';
  import Feed from '$lib/containers/Feed/Feed.svelte';
</script>

<StickyHeader>
  <PageTitle>Popular</PageTitle>
  <FeedNavigation />
</StickyHeader>

<Feed
  top={$page.data.feed.top}
  upcoming={$page.data.feed.upcoming}
  popular={$page.data.feed.popular}
/>
