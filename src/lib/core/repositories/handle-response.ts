import type { AxiosResponse } from 'axios';

export const handleResponse = async (
  res: AxiosResponse,
  callbackReturn: Array<any> | Record<any, any>
) => {
  if (!res.data) return callbackReturn;

  return res.data;
};
