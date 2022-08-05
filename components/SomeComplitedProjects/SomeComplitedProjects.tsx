import { Carousel } from 'react-responsive-carousel';

import { complitedProjects } from '../../utils/consts/complitedProjects';
import ComplitedProjectsCard from './components/ComplitedProjectsCard/ComplitedProjectsCard';

function SomeComplitedProjects() {
  return (
    <section className="section some-complited-projects">
      <h2 className="some-complited-projects__title">
        Некоторые
        {' '}
        <span className="some-complited-projects__gradient">реализованные проекты</span>
      </h2>

      <ul className="some-complited-projects__container-cards">
        {
          complitedProjects.map((complitedProject) => (
            <li key={complitedProject.title}>
              <ComplitedProjectsCard complitedProject={complitedProject} />
            </li>
          ))
        }
      </ul>

      <div
        className="some-complited-projects__carousel"
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

export default SomeComplitedProjects;
