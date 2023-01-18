import type { RequestHandler } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import { isNil } from 'ramda';

import { db } from '$lib/server/core/providers/db.provider';
import { createResponse } from '$lib/server/utils/create-response';

export const GET: RequestHandler = async ({ url, params }) => {
  const userId = params.userId;

  const user = await db.user.findUnique({
    where: {
      google_user_id: userId
    },
    include: {
      watchlists: true
    }
  });

  if (isNil(user)) return createResponse({}, { status: StatusCodes.NOT_FOUND });

  const movies = await Promise.all(
    await user.watchlists.map(async ({ id }) => {
      return await db.movieToWatchList.findMany({
        where: {
          movie_id: id
        }
      });
    })
  );

  console.log(movies);

  return createResponse(user.watchlists, {
    status: StatusCodes.OK
  });
};
