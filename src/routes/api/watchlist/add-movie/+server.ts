import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import { isNil } from 'ramda';

import { db } from '$lib/server/core/providers/db.provider';
import { parseBody } from '$lib/server/utils/parse-body';

type AddMovie = {
  watchlistId: string;
  movieId: string;
  userId: string;
};

export const POST: RequestHandler = async ({ request }) => {
  const body = await parseBody<AddMovie>(request);

  const watchList = await db.watchList.findUnique({
    where: {
      id: body.movieId
    }
  });

  if (isNil(watchList)) throw error(StatusCodes.NOT_FOUND, 'Watchlist doesnt exists');

  if (!isNil(watchList)) {
    if (watchList.user_id !== body.userId) {
      throw error(StatusCodes.UNAUTHORIZED, 'You are not an owner');
    }

    const add = await db.watchList.update({
      where: {
        id: body.movieId
      },
      data: {
        move_id: body.movieId
      }
    });
  }
};
