export type ProjectCardWithImage = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  size: 'L' | 'M' | 'S'
};

export type TextWithLink = {
  text: string;
  link?: string;
};
