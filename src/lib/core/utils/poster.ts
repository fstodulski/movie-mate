import { z } from 'zod';

import { TMBD } from '$lib/core/constants/tmbd.const';

const sizes = {
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original']
} as const;

export const BACKDROP_SIZES = z.enum(sizes.backdrop_sizes);
export const LOGO_SIZES = z.enum(sizes.logo_sizes);
export const POSTER_SIZES = z.enum(sizes.poster_sizes);
export const PROFILE_SIZES = z.enum(sizes.profile_sizes);
export const STILL_SIZES = z.enum(sizes.still_sizes);


type BackdropSizes = z.infer<typeof BACKDROP_SIZES>;
type LogoSizes = z.infer<typeof LOGO_SIZES>;
type PosterSizes = z.infer<typeof POSTER_SIZES>;
type ProfileSizes = z.infer<typeof PROFILE_SIZES>;
type StillSizes = z.infer<typeof STILL_SIZES>;

type Sizes = BackdropSizes | LogoSizes | PosterSizes | ProfileSizes | StillSizes;

export const parsePoster = (url: string, size: Sizes): string => {
  return `${TMBD.posterURI}${size}${url}`;
};
