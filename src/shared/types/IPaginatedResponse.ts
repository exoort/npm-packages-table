export interface IPaginatedResponse<T = unknown> {
  total: number;
  items: T[];
  page: number;
}
