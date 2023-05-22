<script setup lang="ts">
import PageLoader from '@/shared/structures/PageLoader.vue';
import DefaultLayout from '@/shared/layouts/DefaultLayout.vue';

</script>

<template>
  <Suspense>
    <template #default>
      <DefaultLayout>
        <RouterView />
      </DefaultLayout>
    </template>

    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
</template>
