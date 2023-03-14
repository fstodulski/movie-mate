export const API_ENDPOINTS = {
  api: {
    auth: '/auth',
    completions: '/completions',
    genres: {
      findAll: '/genres'
    },
    discovery: {
      mostPopular: '/discover/most-popular',
      genres: '/discover/genres',
      search: '/movie/search'
    },
    movies: {
      byId: '/movies/:id',
      byName: '/movies/by-name',
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
