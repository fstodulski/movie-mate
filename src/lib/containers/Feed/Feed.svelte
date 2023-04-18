<script lang="ts">
  import { page } from '$app/stores';
  import { Fire, Trophy } from '@steeze-ui/remix-icons';

  import TopBarNav from '$lib/components/TopBarNav/TopBarNav.svelte';

  import FeedCategoryList from './components/FeedCategoryList.svelte';
  import FeedNavigation from './components/FeedNavigation.svelte';
</script>

<div class="sticky top-0 z-50">
  <TopBarNav>
    {#if $page.data.feed.results?.genre}
      {$page.data.feed.results?.genre.name}
    {/if}
  </TopBarNav>
  <FeedNavigation />
</div>
<FeedCategoryList
  movies={$page.data.feed.results.popular}
  icon={Fire}
  title="Everyone watch"
  titleId="everyone-watch"
  iconCSS="text-bg-action-error-strong"
/>
<FeedCategoryList
  movies={$page.data.feed.results.top}
  icon={Trophy}
  title="Top 10 movies"
  titleId="top-10-movies"
  iconCSS="text-bg-action-caution-strong"
/>
<FeedCategoryList
  movies={$page.data.feed.results.upcoming}
  icon={Trophy}
  title="Upcoming"
  titleId="upcoming"
  iconCSS="text-bg-action-success-strong"
/>
