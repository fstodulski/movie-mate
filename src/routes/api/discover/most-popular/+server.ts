import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { TmdbHttpProviderv3 } from '$lib/server/core/providers/tmdb-http.provider';
import { StatusCodes } from 'http-status-codes';

export const GET: RequestHandler = async () => {
  const res = await TmdbHttpProviderv3.get('/discover/movie?sort_by=popularity.desc');

  if (!res.data) throw error(StatusCodes.BAD_REQUEST);

  return new Response(JSON.stringify(res.data));
};
