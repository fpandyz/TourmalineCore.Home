import { useTranslation } from 'next-i18next';

function HeroBlock() {
  const { t } = useTranslation('heroBlock');

  return (
    <section className="container section hero-block">
      <div className="hero-block__inner">
        <h1 className="title-type-1">
          {t('title')}
          <span className="hero-block__gradient">{t('title-gradient')}</span>
        </h1>
        <div className="title-type-4 hero-block__description">{t('description')}</div>

        <div>Кнопка</div>
      </div>
      <div className="hero-block__video">
        <video src="/images/video.mp4" autoPlay loop playsInline muted>
          <source src="video.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
      </div>
    </section>
  );
}

export default HeroBlock;
