import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Element } from 'react-scroll';
import { useMemo } from 'react';

import { SectionProps } from '../../types/globals';
import { DEFAULT_LOCALE } from '../../common/utils/consts/localization';

enum ImageSrc {
  'en' = '/images/adaptation-to-project-en.webp',
  'ru' = '/images/adaptation-to-project-ru.webp',
  'zh' = '/images/adaptation-to-project-zh.webp',
}

function AdaptationToProject({
  animationName,
  id,
  ...props
}: SectionProps) {
  const { t } = useTranslation('adaptationToProject');
  const router = useRouter();

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return DEFAULT_LOCALE;
    }

    return router.locale;
  }, [router.locale]);

  return (
    <section
      className="adaptation-to-project"
      {...props}
    >
      <Element name={`scroll-to-${id}`}>
        <div
          className="container container--home-page"
          data-aos={animationName}
        >
          <h2 className="title-type-3">{t('title')}</h2>
          <div className="adaptation-to-project__subtitle">{t('subtitle')}</div>

          <div
            className="custom-scroll adaptation-to-project__scroll"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="adaptation-to-project__image">
              <Image
                src={ImageSrc[routerLocale as keyof typeof ImageSrc]}
                alt={t('imageAlt')}
                fill
                loading="lazy"
              />
            </div>
          </div>

          <div
            className="caption adaptation-to-project__caption"
            data-aos="fade-up"
            data-aos-delay={0}
            data-aos-anchor-placement="bottom-bottom"
          >
            {t('caption')}

          </div>
        </div>
      </Element>
    </section>
  );
}

export default AdaptationToProject;
