<script lang="ts">
  import { ArrowLeft } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="absolute left-4 top-4 z-[53]">
  <button class="btn xs secondary icon" on:click={() => history.back()}>
    <Icon src={ArrowLeft} size="16px" />
  </button>
</div>
