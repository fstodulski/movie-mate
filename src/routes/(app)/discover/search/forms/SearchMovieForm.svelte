<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { Close, Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Input } from 'flowbite-svelte';
  import { isEmpty } from 'ramda';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import { searchMovieStore } from '../search-movie.store';

  let timer;
  let name = '';
  let htmlForm: HTMLFormElement;

  const onInputChange = (event) => {
    const value = event.target.value;

    if (value.length >= 3) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!browser) {
          htmlForm.requestSubmit();
        } else {
          searchMovieStore.fetchMovies(value);
        }
      }, 1000);
    }
  };

  const _prefillName = () => {
    const query = $page.url.searchParams.get('name');

    if (query) {
      name = query;
    }
  };

  onMount(() => {
    _prefillName();
  });
</script>

<form action="?/searchMovie" method="get" bind:this={htmlForm}>
  {#await $page.data.movies then { movies }}
    <input class="hidden" type="number" name="limit" value={movies.limit} />
    <input class="hidden" type="number" name="page" value={movies.page} />
  {/await}
  <Input
    name="name"
    type="text"
    bind:value={name}
    on:input={onInputChange}
    class="grow"
    placeholder="Movie name"
  >
    <Icon slot="left" src={Search2} size="20px" />

    <a slot="right" type="reset" href={APP_ROUTES.discover.search}>
      {#if !isEmpty(name)}
        <Icon src={Close} size="20px" />
      {/if}
    </a>
  </Input>
</form>
