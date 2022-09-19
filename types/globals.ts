import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  animationName: string;
}
