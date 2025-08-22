import { BlockType } from "../../enums";
import { BaseBlock } from "./base-block";

export interface ProjectWithTextBlock extends BaseBlock<BlockType.HOME_PROJECTS_WITH_TEXT_BLOCK> {
  sectionTitle: string;
  textBlockTitle: string;
  projectCardsWithImage: ProjectCardWithImage[];
  textBlockMarkdown: string;
  showOnMobile?: boolean;
}

export interface ProjectCardWithImage {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  link?: string;
  isNda?: boolean;
  size: 'L' | 'M' | 'S' | 'XS';
}
