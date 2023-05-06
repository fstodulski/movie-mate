import { FeedRepository } from '$lib/core/repositories/feed.repository';
import { handleError } from '$lib/server/utils/handle-error';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { data, error } = await FeedRepository.getFeed();

  if (error) await handleError(error, event);

  return {
    feed: data
  };
};
