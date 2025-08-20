import { CollageWithTitleRedesign } from '../redesign/CollageWithTitleRedesign/CollageWithTitleRedesign';
import { HeroRedesign } from '../redesign/HeroRedesign/HeroRedesign';
import { ProjectsRedesign } from '../redesign/ProjectsRedesign/ProjectsRedesign';
import { ProjectsWithTextBlockRedesign } from '../redesign/ProjectsWithTextBlockRedesign/ProjectsWithTextBlockRedesign';
import { ServicesRedesign } from '../redesign/ServicesRedesign/ServicesRedesign';

export enum BlockTypes {
  HOME_HERO = `home.hero`,
  HOME_SERVICES = `home.services`,
  HOME_PROJECTS_WITH_TEXT_BLOCK = `home.project-with-text-block`,
  HOME_PROJECTS = `home.projects`,
  HOME_COLLAGE_WITH_TITLE = `home.collage-with-title`,
}

export const BlockRenderer = ({
  block,
}: {
  block: any;
}) => {
  if (block.__component === BlockTypes.HOME_HERO) {
    return (
      <HeroRedesign
        title={block.title}
        description={block.description}
        imageUrls={block.imageUrls}
      />
    );
  }

  if (block.__component === BlockTypes.HOME_SERVICES) {
    return (
      <ServicesRedesign
        title={block.title}
        services={block.services}
        teamsCard={block.teamsCard}
        teams={block.teams}
        targetId="services"
      />
    );
  }

  if (block.__component === BlockTypes.HOME_PROJECTS_WITH_TEXT_BLOCK) {
    return (
      <ProjectsWithTextBlockRedesign
        sectionTitle={block.title}
        textBlockTitle={block.textBlockTitle}
        projectCardsWithImage={block.projectCardsWithImage}
        textBlockMarkdown={block.textBlockMarkdown}
        showOnMobile={block.showOnMobile}
        targetId="projects"
      />
    );
  }

  if (block.__component === BlockTypes.HOME_PROJECTS) {
    return (
      <ProjectsRedesign
        projectCardsWithImage={block.projectCardsWithImage}
        showOnMobile={block.showOnMobile}
      />
    );
  }

  if (block.__component === BlockTypes.HOME_COLLAGE_WITH_TITLE) {
    return (
      <CollageWithTitleRedesign
        title={block.title}
        imageUrls={block.imageUrls}
      />
    );
  }

  return null;
};
