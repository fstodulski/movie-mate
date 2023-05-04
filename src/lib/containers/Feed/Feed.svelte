<script lang="ts">
  import { page } from '$app/stores';
  import { Fire, Trophy } from '@steeze-ui/remix-icons';

  import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';

  import FeedCategoryList from './components/FeedCategoryList.svelte';
  import FeedNavigation from './components/FeedNavigation.svelte';
</script>

<div class="sticky top-0 z-50 bg-background-dark-muted-default">
  <PageTitle>Popular</PageTitle>
  <FeedNavigation />
</div>
<FeedCategoryList
  movies={$page.data.feed.results.popular}
  icon={Fire}
  title="Everyone watch"
  titleId="everyone-watch"
  iconCSS="text-text-action-error"
/>
<FeedCategoryList
  movies={$page.data.feed.results.top}
  icon={Trophy}
  title="Top 10 movies"
  titleId="top-10-movies"
  iconCSS="text-text-action-caution"
/>
<FeedCategoryList
  movies={$page.data.feed.results.upcoming}
  icon={Trophy}
  title="Upcoming"
  titleId="upcoming"
  iconCSS="text-text-action-success"
/>
