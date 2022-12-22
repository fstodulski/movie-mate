<script lang="ts">
  let innerHeight: number;

  $: clientHeight = innerHeight - 60;
</script>

<svelte:window bind:innerHeight />

<main style="height: {clientHeight}px;" class="flex flex-col max-w-screen-sm mx-auto gap-4 px-2">
  WatchList
</main>
