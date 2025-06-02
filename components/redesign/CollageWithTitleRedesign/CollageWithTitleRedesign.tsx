import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export function CollageWithTitleRedesign() {
  const { t } = useTranslation('collageWithTitleRedesign');

  const imagesUrl: string[] = t('imagesUrl', { returnObjects: true });

  return (
    <section className="collage-with-title-redesign">
      <div className="collage-with-title-redesign__wrapper">
        <h2 className="collage-with-title-redesign__text">{t('text')}</h2>
        {imagesUrl.map((imageUrl, index) => (
          <div
            key={imageUrl}
            className={`collage-with-title-redesign__image collage-with-title-redesign__image-${index + 1}`}
          >
            <Image
              src={imageUrl}
              layout="fill"
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}
