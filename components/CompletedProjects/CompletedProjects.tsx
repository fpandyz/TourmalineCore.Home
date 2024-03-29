import { useTranslation } from 'next-i18next';
import { Carousel } from 'react-responsive-carousel';
import { SectionProps } from '../../types/globals';

import { completedProjects } from '../../common/utils/consts/completedProjects';
import CompletedProjectsCard from './components/CompletedProjectsCard/CompletedProjectsCard';

function CompletedProjects({
  animationName,
  ...props
}: SectionProps) {
  const { t } = useTranslation('completedProjects');

  return (
    <section className="completed-projects" {...props}>
      <div
        className="container container--home-page"
        data-aos={animationName}
      >
        <h2 className="title-type-2">
          {t('title')}
          {' '}
          <span className="completed-projects__gradient">
            {t('titleGradient')}
          </span>
        </h2>

        <div className="completed-projects__description">
          {t('description')}
        </div>

        <ul className="completed-projects__cards-container">
          {
            completedProjects.map((completedProject, index) => (
              <li
                key={completedProject.title}
                className="completed-projects__card"
                data-aos="fade-up"
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
      </div>
    </section>
  );
}

export default CompletedProjects;
