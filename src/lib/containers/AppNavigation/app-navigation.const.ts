import { AccountCircle, Bookmark, Fire, Robot, Search2 } from '@steeze-ui/remix-icons';
import type { IconSource } from '@steeze-ui/remix-icons/types';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';

type Link = {
  icon: IconSource;
  link: string;
  label: string;
};

export const AppNavigationConst: Array<Link> = [
  {
    icon: Search2,
    label: 'Search',
    link: APP_ROUTES.discover.index
  },
  {
    icon: Fire,
    label: 'Popular',
    link: APP_ROUTES.feed.index
  },
  {
    icon: Robot,
    label: '',
    link: APP_ROUTES.chat.index
  },
  {
    icon: Bookmark,
    label: 'Watchlist',
    link: APP_ROUTES.watchlist.toWatch
  },
  {
    icon: AccountCircle,
    label: 'Account',
    link: APP_ROUTES.account.index
  }
];
