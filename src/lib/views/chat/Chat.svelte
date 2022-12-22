<script lang="ts">
  import { onMount } from 'svelte';
  import { ChatStore } from '$lib/views/chat/chat.store.js';
  import { Button, Input } from 'flowbite-svelte';

  import { ChatService, isLoading } from './chat.service';

  let prompt: string;

  let innerHeight: number;

  $: chatHeight = innerHeight - 60;

  onMount(async () => {
    // await ChatService.initialPrompt();
  });

  const send = async () => {
    const val = prompt;
    prompt = '';
    await ChatService.send({
      prompt: val
    });
  };
</script>

<svelte:window bind:innerHeight />

<main style="height: {chatHeight}px;" class="flex flex-col max-w-screen-sm mx-auto gap-4 px-2">
  <section class="mx-auto w-full mt-auto">
    <ul>
      {#each $ChatStore as message}
        <li
          class="p-3 rounded-md max-w-[300px] mb-4"
          class:bot={message.author === 'bot'}
          class:user={message.author === 'user'}
        >
          {message.content.replace('User: ', '')}
        </li>
      {/each}
    </ul>
  </section>

  <div class="flex">
    {#if $isLoading}
      <span class="text-gray-400 text-sm">MovieMate is typing...</span>
    {/if}

    <!--    <span class="text-sm text-gray-500 ml-auto">Quick Answers</span>-->
  </div>

  <form class="flex w-full mx-auto gap-3 mb-2">
    <Input bind:value={prompt} />
    <Button on:click={send}>Send</Button>
  </form>
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
