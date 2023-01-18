<script lang="ts">
  import ToWatch from '$lib/views/watchlist/to-watch/ToWatch.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<ToWatch />
