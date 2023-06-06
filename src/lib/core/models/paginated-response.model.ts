export type PaginatedResponse<TResults> = {
  page: number;
  results: Array<TResults>;
  total_pages: number;
  total_results: number;
};
