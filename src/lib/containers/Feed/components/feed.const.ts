import { Fire, Timer2, Trophy } from '@steeze-ui/remix-icons';

export const LINKS = [
  {
    icon: Fire,
    label: 'Everyone watch',
    css: 'text-bg-action-error-strong',
    href: `#everyone-watch`
  },
  {
    icon: Trophy,
    label: 'Top 10 movies',
    css: 'text-bg-action-caution-strong',
    href: `#top-10-movies`
  },
  {
    icon: Timer2,
    label: 'Upcoming',
    css: 'text-bg-action-success-strong',
    href: `#upcoming`
  }
] as const;
