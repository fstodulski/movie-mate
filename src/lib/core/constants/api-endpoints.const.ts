export const API_ENDPOINTS = {
  auth: {
    signInWithGoogle: '/auth/sign-in-with-google'
  },
  users: {
    me: '/users/me'
  },
  movies: {
    byId: '/movies/:id',
    videos: '/movies/:id/videos',
    byName: '/movies/by-name',
    credits: '/movies/:id/credits'
  },
  genres: {
    findAll: '/genres'
  },
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
