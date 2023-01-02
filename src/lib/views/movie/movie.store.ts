import { writable } from 'svelte/store';
import { z } from 'zod';

const _movieStore = z.object({});

type MovieStore = z.infer<typeof _movieStore>;
export const MovieStore = writable<MovieStore>({});
