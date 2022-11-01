import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  animationName: string;
}

export type OptionYM = {
  clickmap: boolean;
  trackLinks: boolean;
  accurateTrackBounce: boolean;
  webvisor: boolean;
};

declare global {
  interface Window {
    ym: (id: number, operationName: string, option: OptionYM) => unknown;
    gtag: (operationName: string, id: string | Date) => unknown;
  }
}
