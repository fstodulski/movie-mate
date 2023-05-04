<script lang="ts">
  import { page } from '$app/stores';
  import { User } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Button } from 'flowbite-svelte';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  let authUrl: string;

  $: authUrl = $page.data.session ? '' : APP_ROUTES.auth.index;

  let userName: string;

  $: userName = $page.data.user.email.split('@')[0];
</script>

<div class="flex flex-col w-full px-2 gap-8">
  <h3 class="text-3xl font-bold">Profile</h3>

  <nav class="flex flex-col gap-4">
    <div class="flex items-center p-4 rounded-md gap-2 border border-gray-300">
      <Icon src={User} size="20px" />
      <span class="text-xl">{userName || 'Account MovieMate'}</span>

      <form method="POST" action="?/signOut">
        <Button type="submit" class="ml-auto">Log Out</Button>
      </form>
    </div>
    <a href="">
      <div class="flex items-center p-4 rounded-md gap-2 border border-gray-300">
        <Icon src={User} size="20px" />
        <div class="flex flex-col">
          <span class="text-xl">Discord</span>
          <span class="text-sm">Join our discord</span>
        </div>
      </div>
    </a>
  </nav>
</div>
