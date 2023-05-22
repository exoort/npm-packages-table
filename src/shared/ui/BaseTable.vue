<script setup lang="ts">
type KeyFn = (item: unknown) => string;

const {
  headers = () => [],
  items = () => [],
  itemKey = 'id',
} = defineProps<{
  headers?: Record<string, any>[],
  items: unknown[],
  itemKey?: string | KeyFn,
}>();

const emit = defineEmits<{
  (e: 'rowClick', item: unknown): void,
}>();

function getItemKey(item: unknown): string {
  const key = typeof itemKey === 'function' ? itemKey(item) : item[itemKey];

  return String(key);
}

function onRowClick(item: unknown): void {
  emit('rowClick', item);
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        v-if="headers?.length"
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="column in headers"
            :key="column.name"
            scope="col"
            class="px-6 py-3"
          >
            <slot :name="`header(${column.name})`">
              {{ column.label }}
            </slot>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in items"
          :key="getItemKey(item)"
          class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          @click="onRowClick(item)"
        >
          <td
            class="px-6 py-4"
            v-for="column in headers"
            :key="column.name"
          >
            <slot
              :name="`item(${column.name})`"
              :item="item"
            >
              {{ item[column.name] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
