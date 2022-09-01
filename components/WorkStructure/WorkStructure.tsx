import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useMemo } from 'react';
import { SectionProps } from '../../types/globals';
import useDeviceSize from '../../common/hooks/useDeviceSize';

function WorkStructure({
  animationName,
  ...props
}: SectionProps) {
  const { t } = useTranslation('workStructure');

  const deviceSize = useDeviceSize();
  const isMobile = useMemo(() => deviceSize.width <= 768, [deviceSize.width]);

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
            className="work-structure__first-image"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <Image
              src={isMobile ? '/images/good-code-mobile.webp' : '/images/good-code.webp'}
              alt={t('altImageFirst')}
              layout="fill"
              loading="lazy"
            />
          </div>

          <div
            className="work-structure__second-image"
            data-aos="fade-left"
            data-aos-delay={150}
          >
            <Image
              src={isMobile ? '/images/good-work-mobile.webp' : '/images/good-work.webp'}
              alt={t('altImageSecond')}
              layout="fill"
              loading="lazy"
            />
          </div>
        </div>

        <div
          className="work-structure__video"
          data-aos="fade-up"
        >
          <video
            poster="/images/tourmaline-core-poster.webp"
            src="/images/work-structure.mp4"
            autoPlay
            playsInline
            muted
          >
            <track kind="captions" />
          </video>
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
