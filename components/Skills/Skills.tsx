import { useTranslation } from 'next-i18next';

import { getSkills } from './getSkills';
import Accordion from '../Accordion/Accordion';

function Skills({
  id,
}: {
  id: string;
}) {
  const { t } = useTranslation('skills');

  const teamSkills = getSkills(t);

  return (
    <section id={id} className="section skills">
      <div className="container container--home-page">
        <h2 className="title-type-2 skills__title">
          {t('titleSection')}
          {' '}
          <span className="skills__gradient-title">{t('gradientTitleSection')}</span>
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
      </div>
    </section>
  );
}

export default Skills;
