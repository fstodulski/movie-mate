<script lang="ts">
  import { Alert, Checkbox, Close } from '@steeze-ui/remix-icons';
  import type { IconSource } from '@steeze-ui/remix-icons/types';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { isEmpty } from 'ramda';

  export let message: string;
  export let statusCode: number | null;

  let icon: IconSource;
  let iconColor: string;

  let isOpen: boolean;

  $: isOpen = !isEmpty(message) && message !== undefined;

  $: icon = statusCode === 200 ? Checkbox : Alert;
  $: iconColor = statusCode === 200 ? '!text-text-action-success' : '!text-text-action-error';

  $: {
    if (!isEmpty(message)) {
      setTimeout(() => {
        statusCode = null;
        message = '';
      }, 5000);
    }
  }
</script>

<aside
  class:-bottom-12={!isOpen}
  class:bottom-20={isOpen}
  class="fixed left-1/2 ease-in-out -translate-x-1/2 duration-300 w-full"
>
  <div class="w-full px-4">
    <div
      class="rounded-md p-4 flex items-center gap-4 border border-border-default-muted-alpha/[0.32] bg-background-dark-default-default"
    >
      <Icon size="20px" src={icon} class="text-text-light-default {iconColor}" />
      <span class="text-text-light-default text-t200 font-bold max-w-[75%] w-full"> {message}</span>
      <Icon size="20px" src={Close} class="text-text-light-default" />
    </div>
  </div>
</aside>
