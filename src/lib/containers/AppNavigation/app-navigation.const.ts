import { CompassDiscover, Movie, Robot, Search, User } from '@steeze-ui/remix-icons';
import type { IconSource } from '@steeze-ui/remix-icons/types';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

type Link = {
  icon: IconSource;
  link: string;
  label: string;
};

export const AppNavigationConst: Array<Link> = [
  {
    icon: Search,
    label: 'Search',
    link: APP_ROUTES.discover.index
  },
  {
    icon: CompassDiscover,
    label: 'Discover',
    link: APP_ROUTES.feed.mostPopular
  },
  {
    icon: Robot,
    label: '',
    link: APP_ROUTES.chat.index
  },
  {
    icon: Movie,
    label: 'Watchlist',
    link: APP_ROUTES.watchlist.toWatch
  },
  {
    icon: User,
    label: 'Profile',
    link: APP_ROUTES.profile.index
  }
];
