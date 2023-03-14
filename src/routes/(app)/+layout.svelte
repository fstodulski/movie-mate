<script lang="ts">
  import AppNavigation from '$lib/containers/AppNavigation/AppNavigation.svelte';
  import TopBar from '$lib/containers/TopBar/TopBar.svelte';
</script>

<TopBar />
<main>
  <slot />
</main>
<AppNavigation />
