import type { Genres } from '$lib/core/enums/genres.enum';
import { GenresEnum } from '$lib/core/enums/genres.enum';

export const GenreToPoster: Record<Genres, string> = {
  [GenresEnum.enum.Action]:
    'https://occ-0-2506-1432.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSdWvEXqSoVlpnVpq5v5_wruBWy8f03iZxZqJxi_yJhpV043UTvQ64SrPd1534XDQ7qhZU4z6hmMTcP4cZSwlRRklVFoHHWIVZ8.webp?r=ea3',
  [GenresEnum.enum.Adventure]: '',
  [GenresEnum.enum.Animation]: '',
  [GenresEnum.enum.Comedy]: '',
  [GenresEnum.enum.Crime]: '',
  [GenresEnum.enum.Documentary]: '',
  [GenresEnum.enum.Drama]: '',
  [GenresEnum.enum.Family]: '',
  [GenresEnum.enum.Fantasy]: '',
  [GenresEnum.enum.History]: '',
  [GenresEnum.enum.Horror]: '',
  [GenresEnum.enum.Music]: '',
  [GenresEnum.enum.Mystery]: '',
  [GenresEnum.enum.Romance]: '',
  [GenresEnum.enum['Science Fiction']]: '',
  [GenresEnum.enum['TV Movie']]: '',
  [GenresEnum.enum.Thriller]: '',
  [GenresEnum.enum.War]: '',
  [GenresEnum.enum.Western]: ''
};
