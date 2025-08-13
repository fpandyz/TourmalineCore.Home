import { useTranslation } from 'next-i18next';
import { ImageSlider } from '../ImageSlider/ImageSlider';

export function HeroRedesign() {
  const {
    t,
  } = useTranslation(`heroRedesign`);

  const imageUrls: string[] = t(`imageUrls`, {
    returnObjects: true,
  });

  return (
    <section
      className="hero-redesign"
      data-testid="hero"
    >
      <div className="container-redesign hero-redesign__wrapper">
        <h1 className="hero-redesign__title">{t(`title`)}</h1>
        <p className="hero-redesign__description">{t(`description`)}</p>
        <div className="hero-redesign__images">
          <ImageSlider
            imageUrls={imageUrls}
            fill
            interval={1600}
            priority
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
