import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { TmdbHttpProviderv3 } from '$lib/server/core/providers/tmdb-http.provider';
import { createResponse } from '$lib/server/utils/create-response';

export const GET: RequestHandler = async ({ params }) => {
  const id = params.id;

  if (!id) throw error(StatusCodes.BAD_REQUEST, 'Missing ID param');

  const res = await TmdbHttpProviderv3.get(`/movie/${id}`);
  const videos = await TmdbHttpProviderv3.get(`/movie/${id}/videos`);

  console.log(videos);
  if (!res.data) return new Response(JSON.stringify([]));

  console.log(res.data.video);

  return createResponse({
    ...res.data,
    videos: videos.data.results || []
  });
};
