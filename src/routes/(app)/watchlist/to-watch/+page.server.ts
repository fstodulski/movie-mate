import { WatchlistRepository } from '$lib/core/repositories/watchlist.repository';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  await event.parent();
  const session = await event.locals.getSession();

  if (!session) return;

  try {
    const { watchlists } = await WatchlistRepository.findAll();

    return {
      watchlist: [...watchlists.myWatchlists, ...watchlists.sharedWithMe]
    };
  } catch (e) {
    console.log(e);
  }
};
