export type PaginatedResponse<TResults> = {
  query?: string;
  page: number;
  results: Array<TResults>;
  limit: number;
  total_pages?: number;
  total_results?: number;
};
