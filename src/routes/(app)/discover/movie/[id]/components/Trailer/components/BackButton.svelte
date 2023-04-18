<script lang="ts">
  import { ArrowLeft } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Button } from 'flowbite-svelte';
</script>

<div class="absolute left-4 top-4 z-[53]">
  <Button class="!p-2" color="light" on:click={() => history.back()}>
    <Icon src={ArrowLeft} size="16px" />
  </Button>
</div>
