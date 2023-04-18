<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from 'flowbite-svelte';
</script>

<div class="w-full min-h-screen flex justify-center items-center">
  <form action="?/googleSignIn" method="POST" use:enhance>
    <Button type="submit">Sign With Google</Button>
  </form>
</div>
