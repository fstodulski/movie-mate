<script lang="ts">
  import { supabaseClientProvider } from '$lib/core/providers/supabase-client.provider';

  const signWithGoogle = async () => {
    const { data, error } = await supabaseClientProvider.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://127.0.0.1:5173/feed/most-popular'
      }
    });
  };
</script>

Hello world

<button on:click={signWithGoogle}> Sign With Google</button>
