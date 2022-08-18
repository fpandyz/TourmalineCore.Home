import { useTranslation } from 'next-i18next';
import { SectionProps } from '../../types/globals';

function Services({
  ...props
}: SectionProps) {
  const { t } = useTranslation('services');

  return (
    <section className="section services" {...props}>
      <h2 className="title-type-2 services__title">
        {t('titleSection')}
        {' '}
        <span className="services__gradient-title">{t('gradientTitleSection')}</span>
      </h2>

      <div className="services__inner">
        <div className="services__block-first" data-aos="fade-up" data-aos-delay="80">
          <h3 className="title-type-3 services__subtitle">
            {t('firstSubtitle')}
            {' '}
            <span className="services__gradient-subtitle">{t('gradientFirstSubtitle')}</span>
          </h3>

          <p className="services__description">{t('firstDescription')}</p>
        </div>
        <div className="services__block-second" data-aos="fade-up" data-aos-delay="100">
          <h3 className="title-type-3 services__subtitle">
            {t('secondSubtitle')}
            {' '}
            <span className="services__gradient-subtitle">{t('gradientSecondSubtitle')}</span>
          </h3>

          <p className="services__description">{t('secondDescription')}</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
