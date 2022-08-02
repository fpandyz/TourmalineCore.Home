export const getAbility = (t: any) => [
  {
    title: t('Backend.title'),
    scope: t('Backend.scope', { returnObjects: true }),
    services: t('Backend.services', { returnObjects: true }),
    technologies: t('Backend.technologies', { returnObjects: true }),
  },
  {
    title: t('Frontend.title'),
    scope: t('Frontend.scope', { returnObjects: true }),
    services: t('Frontend.services', { returnObjects: true }),
    technologies: t('Frontend.technologies', { returnObjects: true }),
  },
  {
    title: t('QA.title'),
    scope: t('QA.scope', { returnObjects: true }),
    services: t('QA.services', { returnObjects: true }),
    technologies: t('QA.technologies', { returnObjects: true }),
  },
  {
    title: t('Machine.title'),
    scope: t('Machine.scope', { returnObjects: true }),
    services: t('Machine.services', { returnObjects: true }),
    technologies: t('Machine.technologies', { returnObjects: true }),
  },
  {
    title: t('UI/UX.title'),
    scope: t('UI/UX.scope', { returnObjects: true }),
    services: t('UI/UX.services', { returnObjects: true }),
    technologies: t('UI/UX.technologies', { returnObjects: true }),
  },
];
