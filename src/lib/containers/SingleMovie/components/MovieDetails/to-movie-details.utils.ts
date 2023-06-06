import type { Credit } from '$lib/core/models/credit.model';
import type { Movie } from '$lib/core/models/movie.model';

export const toMovieDetailsUtils = (data: {
  movie: Partial<Movie>;
  credits: {
    cast: Credit[];
    crew: Credit[];
  };
}) => {
  return {
    rating: `TMDB ${data.movie.vote_average} (${data.movie.vote_count} votes)`,
    genres: data.movie?.genres?.map((genre) => genre.name).join(', '),
    duration: `${data.movie?.runtime} min`,
    director: data.credits.crew.find((crew) => crew.job === 'Director')?.name,
    screenPlay: data.credits.crew.find((crew) => crew.job === 'Screenplay')?.name,
    status: data.movie?.status ? data.movie.status.toUpperCase() : 'N/A',
    ['original lang.']: data.movie?.original_language.toUpperCase(),
    budget: data.movie.budget ? `$${data.movie.budget}` : 'N/A',
    revenue: data.movie.revenue ? `$${data.movie.revenue}` : 'N/A'
  };
};
