<script lang="ts">
  import { Notification3 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import BottomDrawer from '$lib/components/BottomDrawer/BottomDrawer.svelte';
  import EmptyStatePlaceholder from '$lib/components/EmptyStatePlaceholder/EmptyStatePlaceholder.svelte';
  import type { Movie } from '$lib/core/models/movie.model';

  export let data: {
    movie: Promise<Movie>;
  };

  let isBottomDrawerOpen = false;
  let userAllowedNotifications = false;

  const openDrawer = () => {
    isBottomDrawerOpen = true;
  };

  const closeDrawer = () => {
    isBottomDrawerOpen = false;
    userAllowedNotifications = true;
  };
</script>

{#await data.movie then { movie }}
  <EmptyStatePlaceholder css="px-4">
    <svelte:fragment slot="title">Is it possible no one is streaming it?</svelte:fragment>
    <svelte:fragment slot="subtitle"
      >Get notified when
      <span class="font-bold">
        {movie.original_title}
      </span>
      becomes available on any platform.
    </svelte:fragment>
    <svelte:fragment slot="cta">
      <button class="btn secondary md w-full" on:click={openDrawer}>
        <Icon
          size="20px"
          src={Notification3}
          class={userAllowedNotifications && 'text-text-action-caution'}
          theme={userAllowedNotifications && 'solid'}
        />
        {userAllowedNotifications ? 'You will be notified' : 'Notify me'}
      </button>
    </svelte:fragment>
  </EmptyStatePlaceholder>

  <BottomDrawer on:close={closeDrawer} open={isBottomDrawerOpen}>
    <EmptyStatePlaceholder size="md">
      <svelte:fragment slot="title">Moviemate needs to send you notifications</svelte:fragment>
      <svelte:fragment slot="subtitle">
        The app will notify you when the movie you want to watch becomes available
      </svelte:fragment>
      <svelte:fragment slot="cta">
        <button class="btn md primary w-full" on:click={closeDrawer}>OK</button>
      </svelte:fragment>
    </EmptyStatePlaceholder>
  </BottomDrawer>
{/await}
