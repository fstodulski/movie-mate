<script lang="ts">
  export let rows: number;
</script>

<div class="flex w-full flex-col gap-1">
  {#each { length: rows } as _, index}
    <div class="flex w-full h-4 rounded-[4px] bg-placeholder-default" />
  {/each}
</div>
