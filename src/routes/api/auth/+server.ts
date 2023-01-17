import type { RequestHandler } from '@sveltejs/kit';
import type { AuthSession } from '@supabase/supabase-js';
import { StatusCodes } from 'http-status-codes';
import { isNil } from 'ramda';

import { db } from '$lib/server/core/providers/db.provider';
import { createResponse } from '$lib/server/utils/create-response';
import { parseBody } from '$lib/server/utils/parse-body';

export const POST: RequestHandler = async ({ request }) => {
  const body = await parseBody<AuthSession>(request);

  const user = await db.user.findUnique({
    where: {
      google_user_id: body.user.id
    }
  });

  if (isNil(user)) {
    const newUser = await db.user.create({
      data: {
        google_user_id: body.user.id,
        phone: body.user.phone,
        email: body.user.email || ''
      }
    });

    const newWatchlist = await db.watchList.create({
      data: {
        name: 'All'
      }
    });

    return createResponse(body, { status: StatusCodes.OK });
  }

  return createResponse(body, { status: StatusCodes.OK });
};
