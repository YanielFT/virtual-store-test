export const pathBuilder = (
  path: string,
  values?: Record<string, string>,
): string =>
  path
    .replace(/:(\w+)/g, (match, key) => {
      return values?.[key] ?? match;
    })
    .toLowerCase();

