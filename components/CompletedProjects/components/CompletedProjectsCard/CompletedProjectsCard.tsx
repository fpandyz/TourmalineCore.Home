import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { CompletedProject } from '../../../../common/utils/consts/completedProjects';

import IconLargeArrow from '../../../../icons/large-arrow.svg';
import IconArrow from '../../../../icons/long-arrow.svg';
import isChineseLanguage from '../../../../common/utils/isChineseLanguage';
import { DEFAULT_LOCALE } from '../../../../common/utils/consts/localization';

function CompletedProjectsCard({
  completedProject,
}: {
  completedProject: CompletedProject;
}) {
  const { t } = useTranslation('completedProjects');
  const router = useRouter();

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return DEFAULT_LOCALE;
    }

    return router.locale;
  }, [router.locale]);

  return (
    <a
      href={completedProject.link}
      target="_blank"
      className={clsx('completed-project-card', {
        'completed-project-card--zh': isChineseLanguage(),
      })}
      rel="noreferrer"
    >
      <h3 className="title-type-3 completed-project-card__title">{completedProject.title}</h3>
      <span className="completed-project-card__description">{t(completedProject.descriptionName)}</span>

      <div className="completed-project-card__image">
        <Image
          src={completedProject.image[routerLocale]}
          alt={completedProject.alt}
          fill
          loading="lazy"
        />
      </div>
      <span className="completed-project-card__link">
        {t('goToProject')}
        <IconLargeArrow className="completed-project-card__arrow-large" />
        <IconArrow className="completed-project-card__arrow-long" />
      </span>
    </a>
  );
}

export default CompletedProjectsCard;
