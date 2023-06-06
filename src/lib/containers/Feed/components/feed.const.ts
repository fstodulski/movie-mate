import { Fire, Timer2, Trophy } from '@steeze-ui/remix-icons';

export const LINKS = [
  {
    icon: Fire,
    label: 'Everyone watch',
    css: 'text-text-action-error',
    href: `#everyone-watch`
  },
  {
    icon: Trophy,
    label: 'Top 10 movies',
    css: 'text-text-action-caution',
    href: `#top-10-movies`
  },
  {
    icon: Timer2,
    label: 'Upcoming',
    css: 'text-text-action-success',
    href: `#upcoming`
  }
] as const;
