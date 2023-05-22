<script setup lang="ts">
import { computed } from 'vue';
import BaseTable from '@/shared/ui/BaseTable.vue';
import type { IPaginatedTableItemSlot, IPaginatedTableSlot } from '@/shared/structures/PaginatedTable';
import { PaginatedTable, usePaginatedTable } from '@/shared/structures/PaginatedTable';
import type { INpmPackage } from '../types/INpmPackage';
import { usePackageDetailsDialog } from './PackageDetailsDialog/usePackageDetailsDialog';
import { useNpmApi } from '../composables/useNpmApi';

const fetchFn = computed(() => useNpmApi().getPackages);
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
