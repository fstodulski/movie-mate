export const APP_ROUTES = {
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
    index: '/watchlist'
  }
} as const;
