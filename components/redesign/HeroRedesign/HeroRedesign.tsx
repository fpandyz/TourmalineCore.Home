import { useTranslation } from 'next-i18next';
import { ImageSlider } from '../ImageSlider/ImageSlider';

export function HeroRedesign() {
  const { t } = useTranslation('heroRedesign');
  const imageUrls: string[] = t('imageUrls', { returnObjects: true });

  return (
    <section className="hero-redesign">
      <div className="hero-redesign__wrapper">
        <span className="hero-redesign__title">{t('title')}</span>
        <h2 className="hero-redesign__description">{t('description')}</h2>
        <div className="hero-redesign__images">
          <ImageSlider
            imageUrls={imageUrls}
            layout="fill"
            interval={1600}
            priority
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
