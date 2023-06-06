<script lang="ts">
  import { Pause } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[53]">
  <button class="btn xl tertiary icon no-focus" on:click>
    <Icon src={Pause} size="32px" />
  </button>
</div>
