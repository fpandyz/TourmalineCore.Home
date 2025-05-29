import { useTranslation } from 'next-i18next';
import { ProjectCardWithImage } from './types';
import { ProjectsCardWithImageRedesign } from '../ProjectsCardWithImageRedesign/ProjectsCardWithImageRedesign';
import { MarkdownText } from '../MarkdownText/MarkdownText';

export function ProjectWithTextBlockRedesign({
  translationKey,
}:{
  translationKey: string
}) {
  const { t } = useTranslation(translationKey);

  const projectCardsWithImage: ProjectCardWithImage[] = t('projectsCardsWithImage', { returnObjects: true });

  const sectionTitle = t('title');

  const textBlockTitle = t('textBlockTitle');

  const colCount = projectCardsWithImage.length + 2;

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
              className={`projects-with-text-block-redesign__card col-desktop-${colCount}`}
              title={title}
              description={description}
              imageUrl={imageUrl}
              size={size}
              link={link}
            />
          ))}

          <li className={`projects-with-text-block-redesign__text-block col-desktop-${colCount}`}>
            {textBlockTitle && (
              <h3 className="projects-with-text-block-redesign__text-block-title">
                {t('textBlockTitle')}
              </h3>
            )}
            <MarkdownText
              isTargetBlank
              className="projects-with-text-block-redesign__text-block-markdown"
            >
              {t('textBlockMarkdown')}
            </MarkdownText>
          </li>

        </ul>
      </div>
    </section>
  );
}
