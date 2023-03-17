<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { Button, Input } from 'flowbite-svelte';

  import { SIZES } from '$lib/core/constants/sizes.const';

  import { ChatStore } from './chat.store';

  let prompt: string;

  let innerHeight: number;

  $: chatHeight = innerHeight - (SIZES.bottomBar + SIZES.topBar);

  onMount(async () => {
    await ChatStore.initialPrompt();
  });

  onDestroy(() => {
    ChatStore.destroy();
  });

  const send = async () => {
    const val = prompt;
    prompt = '';
    await ChatStore.send({
      prompt: val
    });
  };
</script>

<svelte:window bind:innerHeight />

<main style="height: {chatHeight}px;" class="flex flex-col max-w-screen-sm mx-auto gap-4 px-2">
  <section class="mx-auto w-full">
    <ul>
      {#each $ChatStore.data as message}
        <li
          class="p-3 rounded-md max-w-[300px] mb-4 text-base"
          class:bot={message.author === 'bot'}
          class:user={message.author === 'user'}
        >
          {message.content.replace('User: ', '')}
        </li>
      {/each}

      {#if $ChatStore.suggestedMovies.length > 0}
        {#each $ChatStore.suggestedMovies as suggestedMovie}
          <li class="p-3 rounded-md max-w-[300px] mb-4 text-base bot flex flex-col">
            <a href={suggestedMovie.tmdb}>
              {suggestedMovie.title}
            </a>
          </li>
        {/each}
      {/if}
    </ul>
  </section>

  <div class="flex flex-col mt-auto">
    {#if $ChatStore.isLoading}
      <div class="flex mt-auto">
        <span class="text-gray-400 text-sm">MovieMate is typing...</span>
        <!--    <span class="text-sm text-gray-500 ml-auto">Quick Answers</span>-->
      </div>
    {/if}

    <form class="flex w-full self-end mx-auto gap-3 mb-2">
      <Input bind:value={prompt} />
      <Button on:click={send}>Send</Button>
    </form>
  </div>
</main>

<style lang="scss">
  .chat {
  }
  .bot {
    @apply bg-blue-500 text-white;
  }

  .user {
    @apply bg-white text-black ml-auto border shadow-sm;
  }
</style>
