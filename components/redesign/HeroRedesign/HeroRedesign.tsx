import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export function HeroRedesign() {
  const { t } = useTranslation('heroRedesign');

  return (
    <section className="hero-redesign">
      <div className="hero-redesign__wrapper">
        <span className="hero-redesign__title">{t('title')}</span>
        <h2 className="hero-redesign__description">{t('description')}</h2>
        <div className="hero-redesign__images">
          <Image
            src={t('imageUrl')}
            layout="fill"
            priority
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
