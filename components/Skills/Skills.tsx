import { useTranslation } from 'next-i18next';

import { getSkills } from './getSkills';
import Accordion from '../Accordion/Accordion';

function Skills() {
  const { t } = useTranslation('skills');

  const teamSkills = getSkills(t);

  return (
    <section className="section skills">
      <h2 className="title-type-2 skills__title">
        Наши
        {' '}
        <span className="skills__gradient-title">возможности</span>
      </h2>

      {teamSkills.map((item) => (
        <Accordion
          key={item.title}
          title={item.title}
          scope={item.scope}
          titleServices={t('titleServices')}
          services={item.services}
          titleTechnologies={t('titleTechnologies')}
          technologies={item.technologies}
        />
      ))}
    </section>
  );
}

export default Skills;
