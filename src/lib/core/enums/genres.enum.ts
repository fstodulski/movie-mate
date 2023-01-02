import { z } from 'zod';

const _GENRES = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western'
] as const;

export const GenresEnum = z.enum(_GENRES);
export type Genres = z.infer<typeof GenresEnum>;
