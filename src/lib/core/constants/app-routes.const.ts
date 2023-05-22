export const APP_ROUTES = {
  auth: {
    index: '/auth'
  },
  chat: {
    index: '/chat'
  },
  discover: {
    index: '/discover',
    movie: '/discover/movies/:id',
    genre: {
      single: '/discover/genre/:id'
    },
    search: '/discover/search'
  },
  feed: {
    index: '/feed'
  },
  watchlist: {
    toWatch: '/watchlist/to-watch',
    watched: '/watchlist/watched'
  },
  account: {
    index: '/account'
  }
} as const;
