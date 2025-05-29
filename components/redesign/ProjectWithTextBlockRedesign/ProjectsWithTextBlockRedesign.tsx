import { useTranslation } from 'next-i18next';
import { ProjectCardWithImage, ProjectsCardWithImageRedesign } from '../ProjectsCardWithImageRedesign/ProjectsCardWithImageRedesign';
import { MarkdownText } from '../MarkdownText/MarkdownText';

export function ProjectWithTextBlockRedesign({
  translationKey,
}:{
  translationKey: string;
}) {
  const { t } = useTranslation(translationKey);

  const projectCardsWithImage: ProjectCardWithImage[] = t('projectsCardsWithImage', { returnObjects: true });

  const sectionTitle = t('title');

  const textBlockTitle = t('textBlockTitle');

  return (
    <section className="projects-with-text-block-redesign">
      <div className="container-redesign projects-with-text-block-redesign__wrapper">
        {sectionTitle && <h2 className="projects-with-text-block-redesign__title">{sectionTitle}</h2>}
        <ul className="projects-with-text-block-redesign__cards grid">
          {projectCardsWithImage.map(({
            title,
            description,
            imageUrl,
            size,
            link,
          }) => (
            <ProjectsCardWithImageRedesign
              key={title}
              className="projects-with-text-block-redesign__card col-desktop-4"
              title={title}
              description={description}
              imageUrl={imageUrl}
              size={size}
              link={link}
            />
          ))}

          <li className="projects-with-text-block-redesign__text-block col-desktop-4">
            {textBlockTitle && (
              <h3 className="projects-with-text-block-redesign__subtitle">
                {textBlockTitle}
              </h3>
            )}
            <MarkdownText
              isTargetBlank
              className="projects-with-text-block-redesign__markdown"
            >
              {t('textBlockMarkdown')}
            </MarkdownText>
          </li>

        </ul>
      </div>
    </section>
  );
}
