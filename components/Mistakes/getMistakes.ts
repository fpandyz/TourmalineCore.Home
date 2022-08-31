import { TFunction } from 'next-i18next';

const variables = ['good', 'bad', 'problems', 'ideas', 'study'];

const mistakesData: {
  [key: string]: {
    developer: string;
    cursor: boolean;
  }[]
} = {
  good:
    [
      {
        developer: 'Victor',
        cursor: true,
      },
      {
        developer: 'Yuliya',
        cursor: false,
      },
      {
        developer: 'Oleg',
        cursor: false,
      },
      {
        developer: 'Andrey',
        cursor: false,
      },
    ],

  bad:
     [
       {
         developer: 'Oleg',
         cursor: false,
       },
       {
         developer: 'Victor',
         cursor: false,
       },
       {
         developer: 'Victor',
         cursor: false,
       },
       {
         developer: 'Yuliya',
         cursor: true,
       },
     ],
  problems: [
    {
      developer: 'Oleg',
      cursor: false,
    },
    {
      developer: 'Oleg',
      cursor: false,
    },
    {
      developer: 'Victor',
      cursor: false,
    },
  ],
  ideas: [
    {
      developer: 'Oleg',
      cursor: true,
    },
    {
      developer: 'Victor',
      cursor: false,
    },
    {
      developer: 'Yuliya',
      cursor: false,
    },
  ],
  study: [
    {
      developer: 'Victor',
      cursor: false,
    },
    {
      developer: 'Oleg',
      cursor: false,
    },
    {
      developer: 'Andrey',
      cursor: true,
    },
    {
      developer: 'Yuliya',
      cursor: false,
    },
  ],
};

export const getMistakes = (t: TFunction) => variables.map((variable) => ({
  title: t(`${variable}.title`),
  mistakes: mistakesData[variable].map((x, index) => {
    const localizationData: { text: string }[] = t(`${variable}.mistakes`, { returnObjects: true });
    return ({
      ...x,
      text: localizationData[index].text,
    });
  }),

}));
