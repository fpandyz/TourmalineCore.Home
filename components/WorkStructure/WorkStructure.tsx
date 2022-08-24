import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { SectionProps } from '../../types/globals';

function WorkStructure({
  animationName,
  ...props
}: SectionProps) {
  const { t } = useTranslation('workStructure');

  return (
    <section className="work-structure" {...props}>
      <div
        className="container container--home-page"
        data-aos={animationName}
      >
        <h2 className="title-type-3">{t('title')}</h2>
        <div className="work-structure__subtitle">{t('subtitle')}</div>

        <div
          className="work-structure__images"
        >
          <div
            className="ratio ratio--16x9 work-structure__first-image"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <Image
              src="/images/good-code.webp"
              alt={t('altImageFirst')}
              layout="fill"
            />
          </div>
          <div
            className="ratio ratio--16x9 work-structure__second-image"
            data-aos="fade-left"
            data-aos-delay={150}
          >
            <Image
              src="/images/good-work.webp"
              alt={t('altImageSecond')}
              layout="fill"
            />
          </div>
        </div>

        <div
          className="caption work-structure__caption"
          data-aos="fade-up"
          data-aos-delay={0}
          data-aos-anchor-placement="center-bottom"
        >
          {t('caption')}
        </div>
      </div>
    </section>
  );
}

export default WorkStructure;
