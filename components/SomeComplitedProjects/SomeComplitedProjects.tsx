import { Carousel } from 'react-responsive-carousel';

import { complitedProjects } from '../../utils/consts/complitedProjects';
import ComplitedProjectsCard from './components/ComplitedProjectsCard/ComplitedProjectsCard';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function SomeComplitedProjects() {
  return (
    <div className="some-complited-projects">
      <h2 className="some-complited-projects__title">
        Некоторые
        {' '}
        <span className="some-complited-projects__gradient">реализованные проекты</span>
      </h2>

      <ul className="some-complited-projects__container-cards">
        {
          complitedProjects.map((complitedProject) => (
            <ComplitedProjectsCard
              key={complitedProject.title}
              complitedProject={complitedProject}
            />
          ))
        }
      </ul>

      <Carousel
        className="some-complited-projects__carousel"
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        width={350}
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
  );
}

export default SomeComplitedProjects;
