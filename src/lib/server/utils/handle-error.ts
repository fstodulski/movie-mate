import type { LoadEvent, RequestEvent, ServerLoadEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
import type { ErrorModel } from '$lib/core/models/error-model';

export const handleError = (
  error: ErrorModel,
  event: ServerLoadEvent | LoadEvent | RequestEvent
) => {
  const { status } = error;

  if (status === StatusCodes.UNAUTHORIZED) {
    throw redirect(303, APP_ROUTES.auth.index);
  }
};
