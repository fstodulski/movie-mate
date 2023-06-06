export const groupBy = (array: Array<any>, key: string) => {
  return array.reduce((group, el) => {
    const innerKey = el[key];
    group[innerKey] = group[innerKey] ?? [];
    group[innerKey].push(el);
    return group;
  }, {});
};
