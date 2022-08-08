import { useTranslation } from 'next-i18next';
import { Carousel } from 'react-responsive-carousel';

import { completedProjects } from '../../utils/consts/completedProjects';
import CompletedProjectsCard from './components/CompletedProjectsCard/CompletedProjectsCard';

function CompletedProjects() {
  const { t } = useTranslation('complitedProjects');

  return (
    <section className="section completed-projects">
      <h2 className="completed-projects__title">
        {t('title')}
        {' '}
        <span className="completed-projects__gradient">
          {t('titleGradient')}
        </span>
      </h2>

      <ul className="completed-projects__cards-container">
        {
          completedProjects.map((completedProject) => (
            <li
              key={completedProject.title}
              className="completed-projects__card"
            >
              <CompletedProjectsCard completedProject={completedProject} />
            </li>
          ))
        }
      </ul>

      <div
        className="completed-projects__carousel"
      >
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
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
