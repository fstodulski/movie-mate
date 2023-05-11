import { WatchlistRepository } from '$lib/core/repositories/watchlist.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  await event.parent();
  const session = await event.locals.getSession();

  if (!session) return;

  try {
    const watchlist = await WatchlistRepository.findAll();

    return {
      watchlist: [...watchlist.data.myWatchlists, ...watchlist.data.sharedWithMe]
    };
  } catch (e) {
    console.log(e);
  }
};
