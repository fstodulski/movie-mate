import type { RequestHandler } from '@sveltejs/kit';

import { parseBody } from '$lib/server/utils/parse-body';

export const POST: RequestHandler = async ({ request }) => {
  const body = await parseBody<any>(request);
};
