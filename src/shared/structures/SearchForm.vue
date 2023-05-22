<script setup lang="ts">

import BaseInput from '@/shared/ui/BaseInput.vue';
import { ref } from 'vue';
import BaseButton from '@/shared/ui/BaseButton.vue';

const { initialValue = '' } = defineProps<{
  initialValue?: string,
}>();

const emit = defineEmits<{
  (e: 'search', value: string): void,
}>();

const searchQuery = ref(initialValue as string);

function onSubmit() {
  emit('search', searchQuery.value);
}

</script>

<template>
  <form @submit.prevent="onSubmit">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >Search</label>

    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        /></svg>
      </div>

      <BaseInput v-model="searchQuery" />

      <BaseButton>
        Search
      </BaseButton>
    </div>
  </form>
</template>
