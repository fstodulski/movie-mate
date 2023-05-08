export const uniqArray = (array: Array<any>, key: string) => {
  const seen = new Set();
  return array.filter((el) => {
    const duplicated = seen.has(el[key]);
    seen.add(el[key]);

    return !duplicated;
  });
};
