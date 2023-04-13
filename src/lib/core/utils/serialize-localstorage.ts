export const serializeLocalstorage = <T, U>(key: string, fallback: U): T | U => {
  const value = localStorage.getItem(key);

  if (!value) return fallback;

  return JSON.parse(value);
};
