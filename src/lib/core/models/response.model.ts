import type { ErrorModel } from '$lib/core/models/error-model';

export interface ResponseModel<T> {
  data?: T;
  error?: ErrorModel;
}
