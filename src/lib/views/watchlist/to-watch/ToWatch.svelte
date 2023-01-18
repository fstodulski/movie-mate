<script lang="ts">
  import { page } from '$app/stores';

  import EmptyState from '$lib/views/watchlist/components/EmptyState/EmptyState.svelte';
  console.log($page.data);
</script>

<EmptyState>
  <span slot="title"> Currently you have nothing to watch </span>
  <span slot="span">Talk with MovieMate or use search to find movies that you will love</span>
</EmptyState>
