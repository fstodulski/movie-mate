import { writable } from 'svelte/store';

import type { RichGenreModel } from '$lib/core/models/genre.model';

type GenresStore = Array<RichGenreModel>;

const _INITIAL_STATE: GenresStore = [];

export const GenresStore = writable<GenresStore>(_INITIAL_STATE);
