<script setup lang="ts">

import SearchForm from '@/shared/structures/SearchForm.vue';
import { computed, ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { useRoute, useRouter } from 'vue-router';
import type { IPaginatedResponse } from '@/shared/types/IPaginatedResponse';
import BasePagination from '@/shared/ui/BasePagination.vue';
import PageLoader from '@/App.vue';

const { fetchFn } = defineProps<{
  fetchFn: (...args) => Promise<IPaginatedResponse>,
}>();

const router = useRouter();

const searchQuery = ref('');
const currentPage = ref(1);

const {
  data, refetch, isRefetching,
} = useQuery<IPaginatedResponse>(
  {
    queryFn: () => fetchFn({
      page: currentPage.value,
      query: searchQuery.value,
      perPage: 10,
    }),
    keepPreviousData: true,
    suspense: true,
    queryKey: ['packages', searchQuery, currentPage],
  },
);

function updateQueryParams() {
  router.push({
    query: {
      page: currentPage.value,
      search: searchQuery.value,
    },
    path: '/',
  });
}

function onSearch(newSearchQuery: string) {
  searchQuery.value = newSearchQuery;
  currentPage.value = 1;

  updateQueryParams();
}

function onPageChange(newPage: number) {
  currentPage.value = newPage;

  updateQueryParams();
}

interface QueryParams {
  page?: number,
  search?: string,
}

const route = useRoute();
const query = computed(() => route.query as QueryParams);

watch(query, async (params) => {
  const { search, page } = params || {};

  currentPage.value = Number(page) || 1;

  searchQuery.value = search || '';

  await refetch();
}, { immediate: true });
</script>

<template>
  <PageLoader v-if="isRefetching" />

  <div
    v-else-if="data"
    class="mx-auto max-w-screen-xl px-4 lg:px-12"
  >
    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <SearchForm
        class="p-5 text-center"
        @search="onSearch"
        :initial-value="searchQuery"
      />

      <slot :items="data.items" />

      <BasePagination
        class="p-5 text-center"
        :model-value="currentPage"
        :total="data.total"
        @update:model-value="onPageChange"
      />
    </div>
  </div>
</template>
