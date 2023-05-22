<script setup lang="ts">

import BaseModal from '@/shared/ui/BaseModal/BaseModal.vue';
</script>

<template>
  <BaseModal>
    <template #activator="{ click }">
      <!-- Modal toggle -->
      <div class="flex justify-center m-5">
        <button
          @click="click"
          id="readProductButton"
          data-modal-toggle="readProductModal"
          class="block bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          Show read modal
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<style scoped>

</style>
