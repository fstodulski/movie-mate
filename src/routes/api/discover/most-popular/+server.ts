import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { TmdbHttpProvider } from '$lib/server/core/providers/tmdb-http.provider';
import { StatusCodes } from 'http-status-codes';

export const GET: RequestHandler = async () => {
  const res = await TmdbHttpProvider.get('/discover/movie?sort_by=popularity.desc');

  console.log(res);
  if (!res.data) throw error(StatusCodes.BAD_REQUEST);

  return new Response(JSON.stringify(res.data));
};
