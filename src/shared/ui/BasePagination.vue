<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  total?: number,
  modelValue?: number,
}>(), {
  total: 1,
  modelValue: undefined,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: unknown): void,
}>();

function updateModelValue(page: number): void {
  emit('update:modelValue', page);
}
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <li v-if="modelValue !== 1">
        <button
          @click="updateModelValue(modelValue - 1)"
          class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
      </li>

      <!--      <li v-for="page in total">-->
      <!--        <button-->
      <!--          @click="updateModelValue(page)"-->
      <!--          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"-->
      <!--        >-->
      <!--          {{ page }}-->
      <!--        </button>-->
      <!--      </li>-->

      <li v-if="modelValue !== total">
        <button
          @click.prevent="updateModelValue(modelValue + 1)"
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>
