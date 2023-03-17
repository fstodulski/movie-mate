export const API_ENDPOINTS = {
  api: {
    auth: '/auth',
    completions: '/completions',
    genres: {
      findAll: '/genres'
    },
    feed: {
      index: '/feed'
    },
    discovery: {
      moviesInGenre: '/discover/movies-in-genre/:id',
      genres: '/discover/genres',
      search: '/movie/search'
    },
    movies: {
      byId: '/movies/:id',
      byName: '/movies/by-name'
    },
    movieToProvider: {
      byId: '/movie-to-provider/by-movie-id/:id'
    },
    watchList: {
      forUser: '/watchlist/for-user/:userId'
    }
  },
  openai: {
    completions: '/v1/completions'
  }
} as const;
