import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CompletedProject extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title: string;
  descriptionName: string;
  image: Record<string, string>;
  alt: string;
  link: string;
}

export const completedProjects: CompletedProject[] = [
  {
    title: 'TradeHack',
    descriptionName: 'descriptionTradeHack',
    image: {
      en: '/images/trade-hack-en.webp',
      ru: '/images/trade-hack-ru.webp',
      zh: '/images/trade-hack-en.webp',
    },
    alt: 'TradeHack',
    link: 'https://tradehack.ru/',
  },
  {
    title: 'FairAction',
    descriptionName: 'descriptionFairAction',
    image: {
      en: '/images/fair-action.webp',
      ru: '/images/fair-action.webp',
      zh: '/images/fair-action.webp',
    },
    alt: 'FairAction',
    link: 'https://fairaction.ngo/',
  },
];
