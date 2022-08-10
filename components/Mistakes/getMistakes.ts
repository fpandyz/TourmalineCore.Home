const variables = ['good', 'bad', 'problems', 'ideas', 'study'];

export const getMistakes = (t: any) => variables.map((variable) => ({
  title: t(`${variable}.title`),
  mistakes: t(`${variable}.mistakes`, { returnObjects: true }),
}));
