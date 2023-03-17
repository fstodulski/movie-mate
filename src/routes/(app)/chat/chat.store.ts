import { get, writable } from 'svelte/store';
import { z } from 'zod';

import type { CompletionsBodyReq } from '$lib/core/repositories/openai.repository';
import { OpenaiRepository } from '$lib/core/repositories/openai.repository';

const _noSuggestions = `\n\n[]`;

const ChatStoreModel = z.object({
  isLoading: z.boolean().optional(),
  data: z.array(
    z.object({
      content: z.string(),
      author: z.enum(['bot', 'user'] as const)
    })
  ),
  suggestedMovies: z.array(
    z.object({
      tmdb: z.string(),
      title: z.string()
    })
  )
});

const SuggestedMoviesModel = z.array(
  z.object({
    tmdb: z.string(),
    title: z.string()
  })
);

type ChatStore = z.infer<typeof ChatStoreModel>;
export const _chatStore = writable<ChatStore>({
  isLoading: false,
  data: [],
  suggestedMovies: []
});

const setLoading = (isLoading: boolean) => {
  _chatStore.update((store) => ({
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
    _chatStore.update((store) => ({
      ...store,
      data: [...store.data, { author: 'bot', content: res }]
    }));
  }

  setLoading(false);
};

const destroy = () => {
  _chatStore.set({
    isLoading: false,
    data: [],
    suggestedMovies: []
  });
};

const checkForMovies = async (botPrompt: string) => {
  const _prompt = `Detect if there are any movie titles in given prompt, then extract movie titles from the string, and list them as JSON Array of objects with Title(use "title" key) of the film and link to TMDB (use "tmdb" key). Else, return an empty JSON Array.`;

  return await OpenaiRepository.completions({
    prompt: `${_prompt}: '${botPrompt.trimStart().trimEnd()}'`
  });
};

const send = async ({ prompt }: CompletionsBodyReq) => {
  _chatStore.update((store) => ({
    data: [...store.data, { author: 'user', content: `\n\nUser: ${prompt}` }],
    suggestedMovies: []
  }));

  const newPrompt = get(_chatStore).data.reduce((prev, next) => {
    return prev + next.content;
  }, '');

  setLoading(true);

  const res = await OpenaiRepository.completions({
    prompt: newPrompt
  });

  const movies = (await checkForMovies(res)).trimStart().trimEnd();

  if (!res) throw Error('');

  const suggestedMovies = JSON.parse(movies);

  _chatStore.update((store) => ({
    data: [...store.data, { author: 'bot', content: res }],
    suggestedMovies: suggestedMovies
  }));

  setLoading(false);
};

export const ChatStore = {
  initialPrompt,
  destroy,
  send,
  subscribe: _chatStore.subscribe
};
