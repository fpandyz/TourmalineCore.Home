import { BlockType } from "../../enums";
import { BaseBlock } from "./base-block";

export interface CollageWithTitleBlock extends BaseBlock<BlockType.HOME_COLLAGE_WITH_TITLE> {
  title: string;
  imageUrls: string[];
}
