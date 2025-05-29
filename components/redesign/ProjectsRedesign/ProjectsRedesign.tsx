import { useTranslation } from 'next-i18next';
import { ProjectCardWithImage, ProjectsCardWithImageRedesign } from '../ProjectsCardWithImageRedesign/ProjectsCardWithImageRedesign';

export function ProjectsRedesign({
  translationKey,
}:{
  translationKey: string
}) {
  const { t } = useTranslation(translationKey);

  const projectCardsWithImage: ProjectCardWithImage[] = t('projectsCardsWithImage', { returnObjects: true });

  return (
    <section className="projects-redesign">
      <div className="container-redesign projects-redesign__wrapper">
        <ul className="projects-redesign__cards grid">
          {projectCardsWithImage.map(({
            title,
            description,
            imageUrl,
            size,
            link,
            isNda,
          }) => (
            <ProjectsCardWithImageRedesign
              key={title}
              className="projects-redesign__card col-desktop-3"
              title={title}
              description={description}
              imageUrl={imageUrl}
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
