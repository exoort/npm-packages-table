import type { IPaginatedResponse } from '@/shared/types/IPaginatedResponse';
import type { INpmPackage } from '@/features/npmPackages/types/INpmPackage';

export function useNpmApi() {
  async function getPackages({
    page = -1,
    perPage = 100,
    query = '',
  }): Promise<IPaginatedResponse<INpmPackage>> {
    const from = page !== -1 ? (page - 1) * perPage : page;

    const response = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${query}&from=${from}&size=${perPage}`,
    );
    const { objects, total } = await response.json();

    return {
      total,
      page,
      items: objects,
    };
  }

  return {
    getPackages,
  };
}
