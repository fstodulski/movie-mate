import { browser } from '$app/environment';

export const saveToLocalStorage = (key: string, value: any) => {
  if (browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  console.warn('Not a browser ENV');
  return;
};
