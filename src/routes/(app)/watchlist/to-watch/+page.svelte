<script lang="ts">
  import { page } from '$app/stores';
  import { Questionnaire, Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { isEmpty } from 'ramda';

  import EmptyStatePlaceholder from '$lib/components/EmptyStatePlaceholder/EmptyStatePlaceholder.svelte';
  import MovieBubble from '$lib/components/MovieBubble/MovieBubble.svelte';
  import SignInFirst from '$lib/components/SignInFirst/SignInFirst.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  let innerHeight: number;

  let listHeight: number;

  $: listHeight = innerHeight - 200;
</script>

<svelte:window bind:innerHeight />

{#if !$page.data.session}
  <SignInFirst />
{:else if !$page.data.watchlist || isEmpty($page.data.watchlist)}
  <EmptyStatePlaceholder>
    <svelte:fragment slot="title">Don’t know what to watch?</svelte:fragment>
    <svelte:fragment slot="subtitle">
      Talk to Moviemate or use search to find movies which you will love
    </svelte:fragment>
    <svelte:fragment slot="cta">
      <div class="flex flex-col w-full gap-2">
        <button class="btn primary xl w-full">
          <Icon src={Questionnaire} size="20px" />
          Ask Moviemate
        </button>

        <button class="btn secondary xl w-full">
          <Icon src={Search2} size="20px" />
          Search
        </button>
      </div>
    </svelte:fragment>
  </EmptyStatePlaceholder>
{/if}

<div class="flex flex-col w-full overflow-y-auto gap-4">
  {#if $page.data.session && !isEmpty($page.data.watchlist)}
    {#each $page.data.watchlist as watchlist}
      <a href={APP_ROUTES.discover.movie.replace(':id', watchlist.movie.tmdb_id)}>
        <MovieBubble movie={watchlist.movie} />
      </a>
    {/each}
  {/if}
</div>
