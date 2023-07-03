<script lang="ts">
  import type { SuperValidated } from 'sveltekit-superforms';
  import { superForm } from 'sveltekit-superforms/client';
  import { Close, Search2 } from '@steeze-ui/remix-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Input } from 'flowbite-svelte';
  import { isEmpty } from 'ramda';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import type { SearchMovieForm } from './search-movie.form';

  export let formData: SuperValidated<SearchMovieForm>;

  const { form, constraints, errors, enhance } = superForm(formData, {});

  let timer;

  $: form.subscribe((res) => {
    clearTimeout(timer);
    timer = setTimeout(() => {}, 1000);
  });
</script>

<form action="" method="post" use:enhance>
  <Input
    {...$constraints.name}
    bind:value={$form.name}
    type="text"
    class="grow"
    placeholder="Movie name"
  >
    <Icon slot="left" src={Search2} size="20px" />

    <a slot="right" type="reset" href={APP_ROUTES.discover.search}>
      {#if !isEmpty($form.name)}
        <Icon src={Close} size="20px" />
      {/if}
    </a>
  </Input>
</form>
