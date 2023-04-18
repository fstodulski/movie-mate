import type { WretchResponse } from 'wretch';

import type { ResponseModel } from '$lib/core/models/response.model';

export const responseHandler = <T>(res: WretchResponse): ResponseModel<T> => ({
  data: res as T
});
