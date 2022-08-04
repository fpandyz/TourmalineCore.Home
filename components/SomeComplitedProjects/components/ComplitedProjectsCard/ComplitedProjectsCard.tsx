import Image from 'next/image';

import { ComplitedProject } from '../../../../utils/consts/complitedProjects';

function ComplitedProjectsCard({
  complitedProject,
}: {
  complitedProject: ComplitedProject;
}) {
  return (
    <li
      className="complited-project-card"
    >
      <a
        href={complitedProject.link}
        target="_blink"
        className="complited-project-card__link"
      >
        <h3 className="complited-project-card__title">{complitedProject.title}</h3>
        <span className="complited-project-card__description">{complitedProject.description}</span>
        <div className="complited-project-card__image">
          <Image src={`/images/${complitedProject.image}.png`} layout="fill" />
        </div>
        <span className="complited-project-card__arrow">
          Перейти на сайт
        </span>
      </a>
    </li>
  );
}

export default ComplitedProjectsCard;
