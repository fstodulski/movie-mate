import { writable } from 'svelte/store';
import { z } from 'zod';

const AuthorEnum = z.enum(['bot', 'user']);

export type AuthorEnum = z.infer<typeof AuthorEnum>;

const ChatStoreModel = z
  .object({
    content: z.string()
  })
  .required();

export type ChatStore = z.infer<typeof ChatStoreModel> & { author: AuthorEnum };
export const ChatStore = writable<Array<ChatStore>>([]);
