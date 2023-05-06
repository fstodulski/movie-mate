<script lang="ts">
  import { page } from '$app/stores';

  import TopBarNav from '$lib/components/TopBarNav/TopBarNav.svelte';
  import Feed from '$lib/containers/Feed/Feed.svelte';
</script>

<TopBarNav>
  {$page.data.genre.name}
</TopBarNav>

<Feed
  upcoming={$page.data.movies.upcoming}
  top={$page.data.movies.top}
  popular={$page.data.movies.popular}
/>
