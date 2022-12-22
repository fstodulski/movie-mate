import type { CompletionsBodyReq } from '$lib/core/repositories/openai.repository';
import { OpenaiRepository } from '$lib/core/repositories/openai.repository';
import { ChatStore } from '$lib/views/chat/chat.store';
import { get, writable } from 'svelte/store';

export const isLoading = writable<boolean>(false);

const initialPrompt = async () => {
  isLoading.set(true);

  const _initialPrompt = `Pretend you are a MovieMate bot. You help users find best movie for tonight. You're helpful, creative, clever, and very friendly. Introduce yourself. Say 'Hi' to me. Ask me about my mood, what kind of films I would like to watch tonight. Do not give me any spoilers!`;

  const res = await OpenaiRepository.completions({
    prompt: _initialPrompt
  });

  if (res) {
    ChatStore.update((store) => [...store, { author: 'bot', content: res }]);
    isLoading.set(false);
  }
};

const send = async ({ prompt }: CompletionsBodyReq) => {
  ChatStore.update((store) => [...store, { author: 'user', content: `\n\nUser: ${prompt}` }]);

  const store = get(ChatStore);

  const newPrompt = store.reduce((prev, next) => {
    return prev + next.content;
  }, '');
  isLoading.set(true);

  const res = await OpenaiRepository.completions({
    prompt: newPrompt
  });

  if (!res) throw Error('');

  ChatStore.update((store) => [...store, { author: 'bot', content: res }]);
  isLoading.set(false);
};

export const ChatService = {
  initialPrompt,
  send
};
