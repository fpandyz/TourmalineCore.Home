export type ProjectCardWithImage = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  size: 'L' | 'M' | 'S'
};

export type Client = {
  name: string;
  link?: string;
};
