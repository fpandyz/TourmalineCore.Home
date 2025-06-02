import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export function ImageRedesign() {
  const { t } = useTranslation('imageRedesign');

  return (
    <div className="image-redesign container-redesign">
      <div className="image-redesign__container">
       <Image
          src={t('imageUrl')}
          layout="fill"
          priority
          alt=""
        />
      </div>
    </div>

  );
}
