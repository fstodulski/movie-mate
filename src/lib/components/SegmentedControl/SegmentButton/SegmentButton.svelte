<script lang="ts">
  export let active: boolean;
</script>

<div
  class="flex gap-2 justify-center items-center py-[10px] px-4 rounded-lg w-full"
  class:active
  class:text-text-light-strong={active}
  class:text-text-light-default={!active}
>
  <slot />
</div>

<style lang="scss">
  .active {
    @apply bg-background-dark-default-alpha/[0.2];
  }
</style>
