import { writable } from 'svelte/store';

type DiscoverStore = Array<any>;
export const DiscoverStore = writable<DiscoverStore>([]);
