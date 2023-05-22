<script setup lang="ts">
import PageLoader from '@/shared/structures/PageLoader.vue';

</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <RouterView />

        <div id="#default-modal-container" />
      </div>
    </template>

    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
</template>
