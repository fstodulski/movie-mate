<script lang="ts">
  import { page } from '$app/stores';
  import { Discord, Group, LogoutBox, Notification3, Patreon } from '@steeze-ui/remix-icons';

  import NavigationListItem from '$lib/components/NavigationListItem/NavigationListItem.svelte';
  import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import NoProfilePreview from './components/NoProfilePreview/NoProfilePreview.svelte';
  import ProfilePreview from './components/ProfilePreview/ProfilePreview.svelte';

  let authUrl: string;

  $: authUrl = $page.data.session ? '' : APP_ROUTES.auth.index;

  let userName: string;

  $: userName = $page.data.user?.email?.split('@')[0];
</script>

<main class="px-4 flex flex-col gap-4">
  <PageTitle>Account</PageTitle>

  {#if userName}
    <ProfilePreview />
  {:else}
    <NoProfilePreview />
  {/if}

  {#if userName}
    <nav class="flex flex-col w-full mb-12">
      <NavigationListItem icon={Notification3}>Notifications</NavigationListItem>
      <NavigationListItem icon={LogoutBox}>Log out</NavigationListItem>
    </nav>
  {/if}

  <nav class="flex flex-col w-full mt-12">
    <span class="text-h500 text-text-light-strong mb-4">Community</span>
    <NavigationListItem icon={Discord}>Community / Support</NavigationListItem>
    <NavigationListItem icon={Group}>About our team</NavigationListItem>
    <NavigationListItem icon={Patreon}>Become our patreon</NavigationListItem>
  </nav>

  <span class="mx-auto text-t300 text-text-light-muted">Version 0.1 Alpha</span>
</main>
