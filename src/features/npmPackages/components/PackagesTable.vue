<script setup lang="ts">

import SearchForm from '@/shared/structures/SearchForm.vue';
import { computed, ref, watch } from 'vue';
import { useNpmApi } from '@/features/npmPackages/composables/useNpmApi';
import { useQuery } from 'vue-query';
import { useRoute } from 'vue-router';
import PaginatedTable from '@/shared/structures/PaginatedTable/PaginatedTable.vue';
import BaseTable from '@/shared/ui/BaseTable.vue';
import type { INpmPackage } from '@/features/npmPackages/types/INpmPackage';
import type { IPaginatedTableItemSlot, IPaginatedTableSlot } from '@/shared/structures/PaginatedTable/types';
import { usePaginatedTable } from '@/shared/structures/PaginatedTable/usePaginatedTable';
import { usePackageDetailsDialog } from '@/features/npmPackages/components/PackageDetailsDialog/usePackageDetailsDialog';

const fetchFn = useNpmApi().getPackages;
type TableItems = IPaginatedTableSlot<INpmPackage>;

function itemKeyGenerator(item: INpmPackage): string {
  return `${item.package.name}_${item.package.author?.name}`;
}

const headers = computed(() => usePaginatedTable<INpmPackage>().headers([
  {
    label: 'Name',
    name: 'name',
  },
  {
    name: 'description',
    label: 'Description',
  },
  {
    label: 'Author',
    name: 'author',
  },
  {
    label: 'Current Version',
    name: 'version',
  },
]));

function onRowClick(item: INpmPackage) {
  usePackageDetailsDialog(item).show();
}
</script>

<template>
  <PaginatedTable :fetch-fn="fetchFn">
    <template #default="{ items }: TableItems">
      <BaseTable
        :items="items"
        :item-key="itemKeyGenerator"
        :headers="headers"
        @row-click="onRowClick"
      >
        <template #item(name)="{ item }: IPaginatedTableItemSlot<INpmPackage>">
          {{ item.package.name }}
        </template>

        <template #item(author)="{ item }: IPaginatedTableItemSlot<INpmPackage>">
          {{ item.package.publisher.username }}
        </template>

        <template #item(version)="{ item }: IPaginatedTableItemSlot<INpmPackage>">
          {{ item.package.version }}
        </template>

        <template #item(description)="{ item }: IPaginatedTableItemSlot<INpmPackage>">
          {{ item.package.description }}
        </template>
      </BaseTable>
    </template>
  </PaginatedTable>
</template>
