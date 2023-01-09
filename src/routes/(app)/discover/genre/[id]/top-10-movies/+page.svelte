<script lang="ts">
  import TopTen from '$lib/views/genre/top-ten/TopTen.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<TopTen />
