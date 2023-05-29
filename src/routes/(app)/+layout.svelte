<script lang="ts">
  import AppNavigation from '$lib/containers/AppNavigation/AppNavigation.svelte';
  import TopBar from '$lib/containers/TopBar/TopBar.svelte';
</script>

<svelte:head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4553897102634434"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<TopBar />
<slot />
<AppNavigation />
