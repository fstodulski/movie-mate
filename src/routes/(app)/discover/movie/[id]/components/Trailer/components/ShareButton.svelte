<script lang="ts">
  import { Share } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Button } from 'flowbite-svelte';
</script>

<div class="absolute right-4 top-4 z-[53]">
  <Button class="!p-2" color="light">
    <Icon src={Share} size="16px" />
  </Button>
</div>
