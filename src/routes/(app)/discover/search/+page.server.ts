import { searchMovieFormBuilder } from './forms/search-movie.form';

export const load = async () => {
  return {
    searchMovieForm: await searchMovieFormBuilder()
  };
};
