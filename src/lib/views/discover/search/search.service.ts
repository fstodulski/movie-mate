import { browser } from '$app/environment';

import { _searchQuery } from '$lib/core/constants/var-names.const';
import { MovieRepository } from '$lib/core/repositories/movie.repository';
import { SearchStore } from '$lib/views/discover/search/search.store';

const queryName = async (name: string) => {
  const res = await MovieRepository.byName(name);

  SearchStore.set(res.results);
};

const saveToHistory = (name: string) => {
  if (browser) {
    const historyRaw = localStorage.getItem(_searchQuery);
    const history = historyRaw ? JSON.parse(historyRaw) : [];

    localStorage.setItem(_searchQuery, JSON.stringify([...new Set([...history, name])]));
  }
};

const getHistory = () => {
  if (browser) {
    const historyRaw = localStorage.getItem(_searchQuery);
    return historyRaw ? JSON.parse(historyRaw) : [];
  }
  return [];
};
export const SearchService = {
  queryName,
  getHistory,
  saveToHistory
};
