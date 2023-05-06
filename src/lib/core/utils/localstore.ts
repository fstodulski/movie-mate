import { browser } from '$app/environment';

export const saveToLocalStorage = (key: string, value: any) => {
  if (!browser) {
    console.warn('Not a browser ENV');
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
};
