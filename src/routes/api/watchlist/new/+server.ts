import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import { isEmpty } from 'ramda';

import { db } from '$lib/server/core/providers/db.provider';
import { createResponse } from '$lib/server/utils/create-response';

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();

  if (!body) throw error(StatusCodes.BAD_REQUEST, 'Missing Body Request');

  const watchList = await db.watchList.findMany({
    where: {
      name: body.name
    }
  });

  if (!isEmpty(watchList)) {
    return createResponse(watchList, {
      status: StatusCodes.CONFLICT
    });
  }
};
