export const parseUrl = (url: string, params: Record<string, string>) => {
  const regex = /:(\w+)/g;
  return url.replace(regex, (_, paramName) => String(params[paramName]) || '');
};
