<script lang="ts">
  import type { SubmitFunction } from '$app/forms';
  import { enhance } from '$app/forms';
  import { Bookmark, CheckboxCircle } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import HttpToast from '$lib/components/Toast/HttpToast.svelte';
  import Toast from '$lib/components/Toast/Toast.svelte';

  import MovieAddedToWatchList from './components/MovieAddedToWatchList/MovieAddedToWatchList.svelte';

  let isToastVisible = false;
  let error: any = null;

  const addToWatchlist = () => {
    isToastVisible = true;
    setTimeout(() => {
      isToastVisible = false;
    }, 8000);
  };

  const submit: SubmitFunction = () => {
    return async ({ result }) => {
      if (result.type !== 'success') {
        error = {
          statusCode: result.status,
          message: result.data
        };
        return;
      }
      addToWatchlist();
    };
  };
</script>

<div class="flex flex-col gap-2 px-3 w-full justify-between">
  <form action="?/addToWatchlist" method="POST" use:enhance={submit}>
    <button class="btn primary md w-full" type="submit">
      <Icon size="20px" src={Bookmark} class="text-text-action-caution" />
      Add to watchlist
    </button>
  </form>
  <button class="btn secondary md w-full">
    <Icon size="20px" src={CheckboxCircle} />
    Mark as watched
  </button>
</div>

<Toast
  isOpen={isToastVisible}
  on:click={() => {
    isToastVisible = false;
  }}
>
  <MovieAddedToWatchList />
</Toast>

<HttpToast {...error} />
