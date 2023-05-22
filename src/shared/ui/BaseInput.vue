<script setup lang="ts">
defineProps<{
  modelValue: unknown,
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: unknown): void,
}>();

function updateModelValue(event: InputEvent): void {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <input
    class="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :value="modelValue"
    @input="updateModelValue"
  >
</template>
