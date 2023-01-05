<script lang="ts">
  import Feed from '$lib/views/feed/Feed.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Feed />
