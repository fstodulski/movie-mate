<script lang="ts">
  import { ArrowLeft, Share } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
</script>

<nav
  class="flex items-center justify-between p-4 text-text-light-strong bg-bg-default-muted-default"
>
  <a href={APP_ROUTES.discover.index}>
    <Icon src={ArrowLeft} size="20px" class="" />
  </a>

  <span class="text-h400">
    <slot />
  </span>

  <Icon src={Share} size="20px" class="" />
</nav>
