import { writable } from 'svelte/store';

type MovieSearchStore = Array<any>;
const _INITIAL_STATE: MovieSearchStore = [];
export const MovieSearchStore = writable<MovieSearchStore>(_INITIAL_STATE);
