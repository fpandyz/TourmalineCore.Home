import { useTranslation } from 'next-i18next';

export function ImageRedesign() {
  const { t } = useTranslation('imageRedesign');

  return (
    <div className="image-redesign container-redesign">
      <img
        src={t('imageUrl')}
        alt=""
      />
    </div>

  );
}
