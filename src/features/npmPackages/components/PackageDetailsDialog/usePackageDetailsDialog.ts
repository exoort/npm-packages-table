import useBaseModal from '@/shared/ui/BaseModal/useBaseModal';
import type { IUsePackageDetailsDialogProps } from './types';
import type { INpmPackage } from '../../types/INpmPackage';
import PackageDetailsDialog from './PackageDetailsDialog.vue';

export function usePackageDetailsDialog(npmPackage: INpmPackage) {
  return useBaseModal<IUsePackageDetailsDialogProps>(PackageDetailsDialog, {
    props: {
      npmPackage,
      initialValue: true,
    },
  });
}
