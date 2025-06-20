import { useTranslation } from 'next-i18next';
import { MutableRefObject } from 'react';

export function SkipLink({
  mainElementRef,
}: {
  mainElementRef: MutableRefObject<null | HTMLElement>;
}) {
  const { t } = useTranslation('skipLink');

  return (
    <a
      href="#main-content"
      className="skip-link button"
      onClick={() => {
        mainElementRef.current!.focus();
      }}
    >
      {t('title')}
    </a>
  );
}
