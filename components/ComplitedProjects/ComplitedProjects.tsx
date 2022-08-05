import { useTranslation } from 'next-i18next';
import { Carousel } from 'react-responsive-carousel';

import { complitedProjects } from '../../utils/consts/complitedProjects';
import ComplitedProjectsCard from './components/ComplitedProjectsCard/ComplitedProjectsCard';

function ComplitedProjects() {
  const { t } = useTranslation('complitedProjects');

  return (
    <section className="section complited-projects">
      <h2 className="complited-projects__title">
        {t('title')}
        {' '}
        <span className="complited-projects__gradient">
          {t('titleGradient')}
        </span>
      </h2>

      <ul className="complited-projects__cards-container">
        {
          complitedProjects.map((complitedProject) => (
            <li
              key={complitedProject.title}
              className="complited-projects__card"
            >
              <ComplitedProjectsCard complitedProject={complitedProject} />
            </li>
          ))
        }
      </ul>

      <div
        className="complited-projects__carousel"
      >
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {
            complitedProjects.map((complitedProject) => (
              <ComplitedProjectsCard
                key={complitedProject.title}
                complitedProject={complitedProject}
              />
            ))
          }
        </Carousel>
      </div>

    </section>
  );
}

export default ComplitedProjects;
