import { useTranslation } from 'next-i18next';
import { usePath } from './usePath';
import { capitalize } from '../utils/capitalize';

export function useTranslationNamespace(block: string) {
  const { slicePathname } = usePath();
  const translation = useTranslation(`${block}${capitalize(slicePathname)}`);

  return translation;
}
