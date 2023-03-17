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
  profile: {
    index: '/profile'
  }
} as const;
