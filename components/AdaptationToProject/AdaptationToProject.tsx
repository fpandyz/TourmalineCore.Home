import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { SectionProps } from '../../types/globals';

enum ImageSrc {
  'en' = '/images/adaptation-to-project-ru.png',
  'ru' = '/images/adaptation-to-project-ru.png',
  'zh' = '/images/adaptation-to-project-ru.png',
}

function AdaptationToProject({
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
    <section className="section adaptation-to-project" {...props}>
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
            layout="fill"
          />
        </div>
      </div>

      <div className="caption adaptation-to-project__caption">{t('caption')}</div>
    </section>
  );
}

export default AdaptationToProject;
