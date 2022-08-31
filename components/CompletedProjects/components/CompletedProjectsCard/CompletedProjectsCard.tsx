import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { CompletedProject } from '../../../../utils/consts/completedProjects';

// import IconLongArrow from '../../../../icons/long-arrow-new.svg';
import IconLargeArrow from '../../../../icons/large-arrow.svg';
import IconArrow from '../../../../icons/long-arrow.svg';

function CompletedProjectsCard({
  completedProject,
}: {
  completedProject: CompletedProject;
}) {
  const { t } = useTranslation('completedProjects');

  return (
    <a
      href={completedProject.link}
      target="_blank"
      className="completed-project-card"
      rel="noreferrer"
    >
      <h3 className="title-type-3 completed-project-card__title">{completedProject.title}</h3>
      <span className="completed-project-card__description">{t(completedProject.descriptionName)}</span>

      <div className="completed-project-card__image">
        <Image
          src={`/images/${completedProject.image}.png`}
          alt={completedProject.alt}
          layout="fill"
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
