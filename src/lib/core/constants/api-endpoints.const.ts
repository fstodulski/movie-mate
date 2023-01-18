export const API_ENDPOINTS = {
  api: {
    auth: '/auth',
    completions: '/completions',
    discovery: {
      mostPopular: '/discover/most-popular',
      genres: '/discover/genres',
      search: '/movie/search'
    },
    movie: {
      byId: '/movie/:id',
      providers: '/movie/providers'
    },
    watchList: {
      forUser: '/watchlist/for-user/:userId'
    }
  },
  openai: {
    completions: '/v1/completions'
  }
} as const;
