export const API_ENDPOINTS = {
  api: {
    completions: '/completions',
    discovery: {
      mostPopular: '/discover/most-popular',
      genres: '/discover/genres',
      search: '/movie/search'
    },
    movie: {
      byId: '/movie/:id',
      providers: '/movie/providers'
    }
  },
  openai: {
    completions: '/v1/completions'
  }
};
