import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

export const parseBody = async <T = Record<string, any>>(request: Request): Promise<T> => {
  const body = await request.json();

  if (!body) throw error(StatusCodes.BAD_REQUEST, 'Missing Body Request');

  return body;
};
