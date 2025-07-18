import { useTranslation } from 'next-i18next';
import { ProjectCardWithImage, ProjectsCardWithImageRedesign } from '../ProjectsCardWithImageRedesign/ProjectsCardWithImageRedesign';

const GRID_COLUMNS = 12;

export function ProjectsRedesign({
  translationKey,
  dataTestId,
}:{
  translationKey: string;
  dataTestId?: string;
}) {
  const {
    t,
  } = useTranslation(translationKey);

  const projectCardsWithImage: ProjectCardWithImage[] = t(`projectsCardsWithImage`, {
    returnObjects: true,
  });

  const columnsCount = GRID_COLUMNS / projectCardsWithImage.length;

  return (
    <section
      className="projects-redesign"
      data-testid={dataTestId}
    >
      <div className="container-redesign projects-redesign__wrapper">
        <ul className="projects-redesign__cards grid">
          {projectCardsWithImage.map(({
            title,
            description,
            imageUrl,
            videoUrl,
            size,
            link,
            isNda,
          }) => (
            <ProjectsCardWithImageRedesign
              key={title}
              className={`projects-redesign__card col-tablet-${columnsCount}`}
              title={title}
              description={description}
              imageUrl={imageUrl}
              videoUrl={videoUrl}
              size={size}
              link={link}
              isNda={isNda}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
