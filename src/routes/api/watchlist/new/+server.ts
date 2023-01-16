import type { RequestHandler } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import { isEmpty } from 'ramda';

import { db } from '$lib/server/core/providers/db.provider';
import { createResponse } from '$lib/server/utils/create-response';
import { parseBody } from '$lib/server/utils/parse-body';

export const POST: RequestHandler = async ({ request }) => {
  const body = await parseBody(request);

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
