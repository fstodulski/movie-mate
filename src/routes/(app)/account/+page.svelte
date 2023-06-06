<script lang="ts">
  import { page } from '$app/stores';
  import { Discord, Group, Notification3, Patreon } from '@steeze-ui/remix-icons';

  import NavigationListItem from '$lib/components/NavigationListItem/NavigationListItem.svelte';
  import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';

  import LogOutButton from './components/LogOutButton/LogOutButton.svelte';
  import NoProfilePreview from './components/NoProfilePreview/NoProfilePreview.svelte';
  import ProfilePreview from './components/ProfilePreview/ProfilePreview.svelte';
</script>

<main class="px-4 flex flex-col gap-4">
  <PageTitle>Account</PageTitle>

  {#if $page.data.session}
    <ProfilePreview />
  {:else}
    <NoProfilePreview />
  {/if}

  {#if $page.data.session}
    <nav class="flex flex-col w-full">
      <NavigationListItem icon={Notification3}>Notifications</NavigationListItem>
      <LogOutButton />
    </nav>
  {/if}

  <nav class="flex flex-col w-full mt-8">
    <span class="text-h500 text-text-light-strong mb-4">Community</span>
    <NavigationListItem icon={Discord}>Community / Support</NavigationListItem>
    <NavigationListItem icon={Group}>About our team</NavigationListItem>
    <NavigationListItem icon={Patreon}>Become our patreon</NavigationListItem>
  </nav>

  <span class="mx-auto text-t300 text-text-light-muted">Version 0.1 Alpha</span>
</main>
