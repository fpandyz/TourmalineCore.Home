import { useTranslation } from 'next-i18next';

function Services({
  id,
}: {
  id: string
}) {
  const { t } = useTranslation('services');

  return (
    <section id={id} className="section services">
      <div className="container container--home-page">
        <h2 className="title-type-2 services__title">
          {t('titleSection')}
          {' '}
          <span className="services__gradient-title">{t('gradientTitleSection')}</span>
        </h2>

        <div className="services__inner">
          <div className="services__block-first">
            <h3 className="title-type-3 services__subtitle">
              {t('firstSubtitle')}
              {' '}
              <span className="services__gradient-subtitle">{t('gradientFirstSubtitle')}</span>
            </h3>

            <p className="services__description">{t('firstDescription')}</p>
          </div>
          <div className="services__block-second">
            <h3 className="title-type-3 services__subtitle">
              {t('secondSubtitle')}
              {' '}
              <span className="services__gradient-subtitle">{t('gradientSecondSubtitle')}</span>
            </h3>

            <p className="services__description">{t('secondDescription')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
