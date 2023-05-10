<script lang="ts">
  export let progress;
</script>

<div class="absolute bottom-0 left-0 w-full pointer-events-none z-10">
  <div class="bg-background-dark-default-alpha w-full h-1">
    <div class="bg-background-action-primary-default h-full" style="width: {progress}%" />
  </div>
</div>
