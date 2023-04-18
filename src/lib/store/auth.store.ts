import { writable } from 'svelte/store';

type AuthStore =
  | {
      access_token: string;
      refresh_token: string;
    }
  | undefined;

const INITIAL_STATE: AuthStore = undefined;
const _authStore = writable<AuthStore>(INITIAL_STATE);

const setTokens = (tokens: AuthStore) => {
  _authStore.set(tokens);
};

const clearTokens = () => {
  _authStore.set(INITIAL_STATE);
};

export const AuthStore = {
  subscribe: _authStore.subscribe,
  setTokens,
  clearTokens
};
