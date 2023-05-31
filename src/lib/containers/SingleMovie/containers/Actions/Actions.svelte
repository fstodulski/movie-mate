<script lang="ts">
  import type { SubmitFunction } from '$app/forms';
  import { enhance } from '$app/forms';
  import { Bookmark, CheckboxCircle } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import BottomDrawer from '$lib/components/BottomDrawer/BottomDrawer.svelte';
  import SignInFirst from '$lib/components/SignInFirst/SignInFirst.svelte';
  import Toast from '$lib/components/Toast/Toast.svelte';
  import { MovieStatus } from '$lib/core/enums/watchlist.enum';

  import MovieAddedToWatchList from './components/MovieAddedToWatchList/MovieAddedToWatchList.svelte';

  export let data;

  let addedToWatchlistToastVisible = false;
  let isDrawerOpen = false;
  let error: any = null;
  let isMovieOnWatchlist: boolean;

  const addToWatchlist = () => {
    addedToWatchlistToastVisible = true;
    setTimeout(() => {
      addedToWatchlistToastVisible = false;
    }, 8000);
  };

  const submit: SubmitFunction = () => {
    return async ({ result, update }) => {
      if (result.type !== 'success') {
        error = {
          statusCode: result.status,
          message: result.data
        };

        isDrawerOpen = true;
        return;
      }
      addToWatchlist();
      await update();
    };
  };
  $: isMovieOnWatchlist = data ? data === MovieStatus.ON_WATCHLIST : false;
</script>

<div class="flex flex-col gap-2 px-3 w-full justify-between">
  <form action="?/addToWatchlist" method="POST" use:enhance={submit}>
    <button
      class="btn primary md w-full"
      type="submit"
      class:pointer-events-none={isMovieOnWatchlist}
    >
      <Icon
        size="20px"
        src={Bookmark}
        class={isMovieOnWatchlist && 'text-text-action-caution'}
        theme={isMovieOnWatchlist && 'solid'}
      />
      {isMovieOnWatchlist ? 'Want to watch' : 'Add to watchlist'}
    </button>
  </form>
  <button class="btn secondary md w-full">
    <Icon size="20px" src={CheckboxCircle} />
    Mark as watched
  </button>
</div>

<BottomDrawer open={isDrawerOpen} on:close={() => (isDrawerOpen = false)}>
  <SignInFirst />
</BottomDrawer>

<Toast
  isOpen={addedToWatchlistToastVisible}
  on:click={() => {
    addedToWatchlistToastVisible = false;
  }}
>
  <MovieAddedToWatchList />
</Toast>
