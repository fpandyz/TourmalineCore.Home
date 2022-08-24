import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { SectionProps } from '../../types/globals';

enum ImageSrc {
  'en' = '/images/adaptation-to-project-ru.webp',
  'ru' = '/images/adaptation-to-project-ru.webp',
  'zh' = '/images/adaptation-to-project-ru.webp',
}

function AdaptationToProject({
  animationName,
  ...props
}: SectionProps) {
  const { t } = useTranslation('adaptationToProject');
  const router = useRouter();

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return 'en';
    }

    return router.locale;
  }, [router.locale]);

  return (
    <section className="adaptation-to-project" {...props}>
      <div
        className="container container--home-page"
        data-aos={animationName}
      >
        <h2 className="title-type-3">{t('title')}</h2>
        <div className="adaptation-to-project__subtitle">{t('subtitle')}</div>

        <div
          className="scroll adaptation-to-project__scroll"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="ratio ratio--16x9 adaptation-to-project__image">
            <Image
              src={ImageSrc[routerLocale as keyof typeof ImageSrc]}
              alt={t('imageAlt')}
              layout="fill"
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
    </section>
  );
}

export default AdaptationToProject;
