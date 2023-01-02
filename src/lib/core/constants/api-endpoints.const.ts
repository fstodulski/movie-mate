export const API_ENDPOINTS = {
  api: {
    completions: '/completions',
    discovery: {
      mostPopular: '/discover/most-popular',
      genres: '/discover/genres',
      search: '/movie/search'
    },
    movie: '/movie/:id'
  },
  openai: {
    completions: '/v1/completions'
  }
};
