import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import type { IconSource } from '@steeze-ui/heroicons/types';
import { CompassDiscover, Movie, Robot } from '@steeze-ui/remix-icons';

type Link = {
  icon: IconSource;
  link: string;
  label: string;
};

export const AppNavigationConst: Array<Link> = [
  {
    icon: CompassDiscover,
    label: 'Discover',
    link: APP_ROUTES.discover.index
  },
  {
    icon: Robot,
    label: '',
    link: APP_ROUTES.chat.index
  },
  {
    icon: Movie,
    label: 'Watchlist',
    link: APP_ROUTES.watchlist.index
  }
];
