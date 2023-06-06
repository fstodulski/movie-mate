<script lang="ts">
  import { LogoutBox } from '@steeze-ui/remix-icons';

  import NavigationListItem from '$lib/components/NavigationListItem/NavigationListItem.svelte';

  let form: HTMLFormElement;

  const signOut = () => {
    form.requestSubmit();
  };
</script>

<form action="?/logOut" method="POST" bind:this={form}>
  <NavigationListItem on:click={signOut} icon={LogoutBox}>Log out</NavigationListItem>
</form>
