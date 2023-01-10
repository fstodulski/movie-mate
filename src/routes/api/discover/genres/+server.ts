import type { RequestHandler } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import { map } from 'ramda';

import type { GenreModel, RichGenreModel } from '$lib/core/models/genre.model';
import { GenreToPoster } from '$lib/core/utils/genre-to-poster';
import { TmdbHttpProviderv3 } from '$lib/server/core/providers/tmdb-http.provider';
import { createResponse } from '$lib/server/utils/create-response';

export const GET: RequestHandler = async ({ request, getClientAddress }) => {
  const genres = await TmdbHttpProviderv3.get<{ genres: Array<GenreModel> }>('/genre/movie/list');

  const ip = getClientAddress();

  try {
    if (!genres.data)
      return createResponse([], {
        status: StatusCodes.NO_CONTENT
      });

    const mappedWithPosters = map(
      (genre): RichGenreModel => ({ ...genre, poster: GenreToPoster[genre.name] }),
      genres.data.genres
    );

    return createResponse(mappedWithPosters, {
      status: StatusCodes.OK
    });
  } catch (e) {
    return createResponse([], {
      status: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};
