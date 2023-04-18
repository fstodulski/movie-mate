<script lang="ts">
  import { Bookmark, CheckboxCircle } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Button } from 'flowbite-svelte';
</script>

<div class="flex flex-col gap-2 px-3 w-full justify-between">
  <Button class="w-full gap-2" color="alternative">
    <Icon size="20px" src={Bookmark} />
    Add to watchlist
  </Button>
  <Button class="w-full gap-2">
    <Icon size="20px" src={CheckboxCircle} />
    Mark as Watched
  </Button>
</div>
