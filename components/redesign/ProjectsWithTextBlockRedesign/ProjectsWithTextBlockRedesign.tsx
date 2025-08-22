import { ProjectCardWithImage, ProjectsCardWithImageRedesign } from '../ProjectsCardWithImageRedesign/ProjectsCardWithImageRedesign';
import { MarkdownText } from '../MarkdownText/MarkdownText';
import { useDeviceSize } from '../../../common/hooks';

export function ProjectsWithTextBlockRedesign({
  sectionTitle,
  textBlockTitle,
  projectCardsWithImage,
  textBlockMarkdown,
  showOnMobile = true,
  targetId,
  dataTestId,
}:{
  sectionTitle: string;
  textBlockTitle: string;
  projectCardsWithImage: ProjectCardWithImage[];
  textBlockMarkdown: string;
  showOnMobile?: boolean;
  targetId?: string;
  dataTestId?: string;
}) {
  const {
    isTablet,
  } = useDeviceSize();

  if (!showOnMobile && !isTablet) {
    return null;
  }
  return (
    <section
      className="projects-with-text-block-redesign projects-redesign"
      {...(targetId && {
        id: targetId,
      })}
      data-testid={dataTestId}
    >
      <div className="container-redesign projects-with-text-block-redesign__wrapper">
        {sectionTitle && <h2 className="projects-with-text-block-redesign__title">{sectionTitle}</h2>}
        <ul className="projects-with-text-block-redesign__cards grid">
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
              className="projects-with-text-block-redesign__card  col-tablet-4"
              title={title}
              description={description}
              imageUrl={imageUrl}
              size={size}
              link={link}
              isNda={isNda}
            />
          ))}

          <li className="projects-with-text-block-redesign__text-block col-tablet-4">
            {textBlockTitle && (
              <h3 className="projects-with-text-block-redesign__subtitle">
                {textBlockTitle}
              </h3>
            )}
            <MarkdownText
              isTargetBlank
              className="projects-with-text-block-redesign__markdown"
            >
              {textBlockMarkdown}
            </MarkdownText>
          </li>

        </ul>
      </div>
    </section>
  );
}
