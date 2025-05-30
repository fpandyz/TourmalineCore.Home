import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export function TextSurroundedByImagesRedesign() {
  const { t } = useTranslation('textSurroundedByImagesRedesign');

  const imagesUrl: string[] = t('imagesUrl', { returnObjects: true });

  return (
    <section className="text-surrounded-by-images-redesign">
      <div className="text-surrounded-by-images-redesign__wrapper">
        <h2 className="text-surrounded-by-images-redesign__text">{t('text')}</h2>
        {imagesUrl.map((imageUrl, index) => (
          <div
            key={imageUrl}
            className={`text-surrounded-by-images-redesign__image text-surrounded-by-images-redesign__image-${index + 1}`}
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
