export type TmdbPagedResponse<T> = {
  results: Array<T>;
  page: number;
  total_pages: number;
  total_results: number;
};
