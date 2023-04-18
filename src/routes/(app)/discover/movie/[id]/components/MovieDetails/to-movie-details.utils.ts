export const toMovieDetailsUtils = (movie) => {
  console.log(movie);
  return {
    rating: `TMDB ${movie.vote_average} (${movie.vote_count} votes)`,
    genres: movie.genres.map((genre) => genre.name).join(', '),
    duration: `${movie?.runtime} min`,
    director: movie.crew.find((crew) => crew.job === 'Director')?.name,
    screenPlay: movie.crew.find((crew) => crew.job === 'Screenplay')?.name,
    status: movie?.status ? movie.status.toUpperCase() : 'N/A',
    ['original lang.']: movie?.original_language.toUpperCase(),
    budget: movie.budget ? `$${movie.budget}` : 'N/A',
    revenue: movie.revenue ? `$${movie.revenue}` : 'N/A'
  };
};
