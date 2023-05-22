import type { IPaginatedTableHeader } from '@/shared/structures/PaginatedTable/types';

export function usePaginatedTable<T = any>() {
  function headers<T>(columns: IPaginatedTableHeader<T>[]) {
    return columns;
  }

  return { headers };
}
