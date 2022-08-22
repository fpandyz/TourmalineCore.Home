import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CompletedProject extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title: string;
  descriptionName: string;
  image: string;
  alt: string;
  link: string;
}

export const completedProjects: CompletedProject[] = [
  {
    title: 'TradeHack',
    descriptionName: 'descriptionTradeHack',
    image: 'trade-hack',
    alt: 'TradeHack',
    link: 'https://tradehack.ru/',
  },
  {
    title: 'FairAction',
    descriptionName: 'descriptionFairAction',
    image: 'fair-action',
    alt: 'FairAction',
    link: 'https://fairaction.ngo/',
  },
];
