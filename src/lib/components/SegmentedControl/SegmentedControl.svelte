<div class="flex items-center gap-2 w-full segment-control">
  <slot />
</div>

<style lang="scss" global>
  .segment-control {
    @apply border bg-background-dark-default-default border-border-default-muted-alpha/[0.32] rounded-xl p-1;
  }
</style>
