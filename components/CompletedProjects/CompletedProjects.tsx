import { useTranslation } from 'next-i18next';
import { Carousel } from 'react-responsive-carousel';
import { SectionProps } from '../../types/globals';

import { completedProjects } from '../../utils/consts/completedProjects';
import CompletedProjectsCard from './components/CompletedProjectsCard/CompletedProjectsCard';

function CompletedProjects({
  ...props
}: SectionProps) {
  const { t } = useTranslation('completedProjects');

  return (
    <section className="section completed-projects" {...props}>
      <h2 className="title-type-2 completed-projects__title">
        {t('title')}
        {' '}
        <span className="completed-projects__gradient">
          {t('titleGradient')}
        </span>
      </h2>

      <ul className="completed-projects__cards-container">
        {
          completedProjects.map((completedProject, index) => (
            <li
              key={completedProject.title}
              className="completed-projects__card"
              data-aos="fade-right"
              data-aos-delay={100 * (index + 1)}
            >
              <CompletedProjectsCard completedProject={completedProject} />
            </li>
          ))
        }
      </ul>

      <div
        className="responsive-carousel"
      >
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          preventMovementUntilSwipeScrollTolerance

        >
          {
            completedProjects.map((completedProject) => (
              <CompletedProjectsCard
                key={completedProject.title}
                completedProject={completedProject}
              />
            ))
          }
        </Carousel>
      </div>

    </section>
  );
}

export default CompletedProjects;
