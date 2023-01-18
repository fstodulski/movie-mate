export const APP_ROUTES = {
  auth: {
    index: '/auth'
  },
  chat: {
    index: '/chat'
  },
  discover: {
    index: '/discover',
    movie: '/discover/movie/:id',
    genre: {
      everyoneWatch: '/discover/genre/:id/everyone-watch',
      topTen: '/discover/genre/:id/top-10-movies',
      upcoming: '/discover/genre/:id/upcoming'
    },
    search: '/discover/search'
  },
  feed: {
    mostPopular: '/feed/most-popular',
    newestReleases: '/feed/newest-releases',
    bestReviews: '/feed/best-reviews'
  },
  watchlist: {
    toWatch: '/watchlist/to-watch',
    watched: '/watchlist/watched'
  },
  profile: {
    index: '/profile'
  }
} as const;
