import { writable } from 'svelte/store';

import type { RichGenreModel } from '$lib/core/models/genre.model';

type DiscoverStore = Array<RichGenreModel>;
export const DiscoverStore = writable<DiscoverStore>([]);
