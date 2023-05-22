<script setup lang="ts">

import BaseModal from '@/shared/ui/BaseModal/BaseModal.vue';
import type {
  IUsePackageDetailsDialogProps,
} from './types';

const { initialValue, npmPackage } = defineProps<IUsePackageDetailsDialogProps>();

</script>

<template>
  <BaseModal :initial-value="initialValue">
    <pre>
      <code class="text-white break-all">
      {{ npmPackage }}
    </code>
    </pre>
  </BaseModal>
</template>
