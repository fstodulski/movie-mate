<script lang="ts">
  import { supabaseClientProvider } from '$lib/core/providers/supabase-client.provider';

  import { PUBLIC_HOST_URL } from '$env/static/public';

  const signWithGoogle = async () => {
    const redirectTo = `${PUBLIC_HOST_URL}/feed/most-popular`;

    const { data, error } = await supabaseClientProvider.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo
      }
    });
  };
</script>

<button on:click={signWithGoogle}> Sign With Google</button>
