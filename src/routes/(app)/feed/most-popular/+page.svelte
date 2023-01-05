<script lang="ts">
  import MostPopular from '$lib/views/feed/most-popular/MostPopular.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<MostPopular />
