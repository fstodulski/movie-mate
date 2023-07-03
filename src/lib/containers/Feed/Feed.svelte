<script lang="ts">
  import { Fire, Trophy } from '@steeze-ui/remix-icons';
  import { isEmpty } from 'ramda';

  import FeedCategoryList from './components/FeedCategoryList.svelte';

  export let popular: Array<any>;
  export let top: Array<any>;
  export let upcoming: Array<any>;
</script>

<section class="w-full flex flex-col mb-12">
  {#if !isEmpty(popular)}
    <FeedCategoryList
      movies={popular}
      icon={Fire}
      title="Everyone watch"
      titleId="everyone-watch"
      iconCSS="text-text-action-error"
    />
  {/if}

  {#if !isEmpty(top)}
    <FeedCategoryList
      movies={top}
      icon={Trophy}
      title="Top 10 movies"
      titleId="top-10-movies"
      iconCSS="text-text-action-caution"
    />
  {/if}
  {#if !isEmpty(upcoming)}
    <FeedCategoryList
      movies={upcoming}
      icon={Trophy}
      title="Upcoming"
      titleId="upcoming"
      iconCSS="text-text-action-success"
    />
  {/if}
</section>
