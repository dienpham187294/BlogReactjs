import { ContainerClasses } from '@mui/system';
import { generateUtilityClass, generateUtilityClasses } from '../className';

export type { ContainerClassKey } from '@mui/system';
export type { ContainerClasses };

export function getContainerUtilityClass(slot: string): string {
  return generateUtilityClass('JoyContainer', slot);
}

const containerClasses: ContainerClasses = generateUtilityClasses('JoyContainer', [
  'root',
  'disableGutters',
  'fixed',
  'maxWidthXs',
  'maxWidthSm',
  'maxWidthMd',
  'maxWidthLg',
  'maxWidthXl',
]);

export default containerClasses;
