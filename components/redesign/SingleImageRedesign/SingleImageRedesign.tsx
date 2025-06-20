import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export function SingleImageRedesign() {
  const { t } = useTranslation('singleImageRedesign');

  return (
    <section className="single-image-redesign container-redesign">
      <div className="single-image-redesign__container">
        <Image
          src={t('imageUrl')}
          layout="fill"
          alt=""
        />
      </div>
    </section>
  );
}
