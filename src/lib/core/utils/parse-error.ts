import type { WretchError } from 'wretch';

import type { ResponseModel } from '$lib/core/models/response.model';

export const parseError = (e: WretchError): ResponseModel<unknown> => ({
  data: {},
  error: {
    status: e.status,
    message: e.json.message
  }
});
