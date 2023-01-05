<script lang="ts">
  import AppNavigation from '$lib/containers/AppNavigation/AppNavigation.svelte';
  import TopBar from '$lib/containers/TopBar/TopBar.svelte';

  import '../styles/app.scss';
</script>

<TopBar />
<main class="py-10">
  <slot />
</main>

<AppNavigation />
