<script lang="ts">
  import { page } from '$app/stores';

  import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

  import ProfilePreview from './components/ProfilePreview/ProfilePreview.svelte';

  let authUrl: string;

  $: authUrl = $page.data.session ? '' : APP_ROUTES.auth.index;

  let userName: string;

  $: userName = $page.data.user?.email?.split('@')[0];
</script>

<main class="px-4">
  <PageTitle>Account</PageTitle>
  <ProfilePreview />
</main>
