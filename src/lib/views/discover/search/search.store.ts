import { writable } from 'svelte/store';

type SearchStore = Array<any>;
const _INITIAL_STATE: SearchStore = [];
export const SearchStore = writable<SearchStore>(_INITIAL_STATE);
