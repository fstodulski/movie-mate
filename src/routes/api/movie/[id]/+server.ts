import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { TmdbHttpProviderv3 } from '$lib/server/core/providers/tmdb-http.provider';

export const GET: RequestHandler = async ({ params }) => {
  const id = params.id;

  console.log(id);

  if (!id) throw error(StatusCodes.BAD_REQUEST, 'Missing ID param');

  const res = await TmdbHttpProviderv3.get(`/movie/${id}`);

  console.log(res);

  if (!res.data) return new Response(JSON.stringify([]));

  return new Response(JSON.stringify(res.data));
};
