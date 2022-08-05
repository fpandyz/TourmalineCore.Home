import { Carousel } from 'react-responsive-carousel';

import { complitedProjects } from '../../utils/consts/complitedProjects';
import ComplitedProjectsCard from './components/ComplitedProjectsCard/ComplitedProjectsCard';

function ComplitedProjects() {
  return (
    <section className="section complited-projects">
      <h2 className="complited-projects__title">
        Некоторые
        {' '}
        <span className="complited-projects__gradient">реализованные проекты</span>
      </h2>

      <ul className="complited-projects__cards-container">
        {
          complitedProjects.map((complitedProject) => (
            <li key={complitedProject.title}>
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
