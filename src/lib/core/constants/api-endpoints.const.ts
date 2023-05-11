export const API_ENDPOINTS = {
  auth: {
    signInWithGoogle: '/auth/sign-in-with-google'
  },
  users: {
    me: '/users/me'
  },
  movies: {
    byId: '/movies/:id',
    videos: '/movies/:id/trailers',
    byName: '/movies/by-name',
    credits: '/movies/:id/credits',
    byGenre: '/movies/by-genre/:id',
    providers: '/movies/:id/providers'
  },
  watchlists: {
    findAll: '/watchlists',
    movieStatus: '/watchlists/movie-status/:movieId',
    addMovie: '/watchlists/add-movie'
  },
  genres: {
    findAll: '/genres',
    findOne: '/genres/:id'
  },
  feed: {
    index: '/feed'
  },
  api: {
    auth: '/auth',
    completions: '/completions',
    genres: {
      findAll: '/genres'
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
