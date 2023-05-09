<script lang="ts">
  import { Bookmark, CheckboxCircle } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="flex flex-col gap-2 px-3 w-full justify-between">
  <button class="btn primary md w-full">
    <Icon size="20px" src={Bookmark} class="text-text-action-caution" theme="solid" />
    Add to watchlist
  </button>
  <button class="btn secondary md w-full">
    <Icon size="20px" src={CheckboxCircle} />
    Mark as watched
  </button>
</div>
