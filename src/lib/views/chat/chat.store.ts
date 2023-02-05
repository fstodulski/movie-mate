import { get, writable } from 'svelte/store';
import { z } from 'zod';

import type { CompletionsBodyReq } from '$lib/core/repositories/openai.repository';
import { OpenaiRepository } from '$lib/core/repositories/openai.repository';

const ChatStoreModel = z.object({
  isLoading: z.boolean().optional(),
  data: z.array(
    z.object({
      content: z.string(),
      author: z.enum(['bot', 'user'] as const)
    })
  )
});

type ChatStore = z.infer<typeof ChatStoreModel>;
const ChatStore = writable<ChatStore>({
  isLoading: false,
  data: []
});

const setLoading = (isLoading: boolean) => {
  ChatStore.update((store) => ({
    ...store,
    isLoading
  }));
};

const initialPrompt = async () => {
  setLoading(true);

  const _initialPrompt = `Pretend you are a MovieMate bot. You help users find best movie for tonight. You're helpful, creative, clever, and very friendly. Introduce yourself. Say 'Hi' to me. Ask me about my mood, what kind of films I would like to watch tonight. Do not give me any spoilers!`;

  const res = await OpenaiRepository.completions({
    prompt: _initialPrompt
  });

  if (res) {
    ChatStore.update((store) => ({
      ...store,
      data: [...store.data, { author: 'bot', content: res }]
    }));

    setLoading(false);
  }
};

const destroy = () => {
  ChatStore.set({
    isLoading: false,
    data: []
  });
};

const send = async ({ prompt }: CompletionsBodyReq) => {
  ChatStore.update((store) => ({
    data: [...store.data, { author: 'user', content: `\n\nUser: ${prompt}` }]
  }));

  const newPrompt = get(ChatStore).data.reduce((prev, next) => {
    return prev + next.content;
  }, '');

  setLoading(true);

  const res = await OpenaiRepository.completions({
    prompt: newPrompt
  });

  if (!res) throw Error('');

  ChatStore.update((store) => ({
    data: [...store.data, { author: 'bot', content: res }]
  }));

  setLoading(false);
};

export default {
  subscribe: ChatStore.subscribe,
  initialPrompt,
  data: ChatStore.subscribe((res) => res.data),
  isLoading: ChatStore.subscribe((res) => res.isLoading),
  send,
  destroy
};
