import type { IBaseModalProps } from '@/shared/ui/BaseModal/useBaseModal';
import type { INpmPackage } from '../../types/INpmPackage';

export interface IUsePackageDetailsDialogProps extends IBaseModalProps {
  npmPackage: INpmPackage,
}
