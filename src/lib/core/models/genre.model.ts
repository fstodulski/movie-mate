import { z } from 'zod';

import { GenresEnum } from '$lib/core/enums/genres.enum';

const _GenreModel = z.object({
  id: z.string(),
  name: GenresEnum
});

const _poster = z.string();

export type GenreModel = z.infer<typeof _GenreModel>;

export type RichGenreModel = GenreModel & { poster: z.infer<typeof _poster> };
