export interface IPagination {
  limit?: number,
  page?: number,
}

export interface IPaginationResponse {
  limit: number,
  page: number,
  total: number,
}
