import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { TmdbHttpProvider } from '$lib/server/core/providers/tmdb-http.provider';
import { StatusCodes } from 'http-status-codes';

export const GET: RequestHandler = async ({ params }) => {
  const id = params.id;

  if (!id) throw error(StatusCodes.BAD_REQUEST, 'Missing ID param');

  const res = await TmdbHttpProvider.get(`/movies/${id}`);

  if (!res.data) return [];

  return new Response(JSON.stringify(res.data));
};
