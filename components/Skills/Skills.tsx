import { useTranslation } from 'next-i18next';

import { getSkills } from './getSkills';
import Accordion from '../Accordion/Accordion';
import { SectionProps } from '../../types/globals';

function Skills({
  animationName,
  ...props
}: SectionProps) {
  const { t } = useTranslation('skills');

  const teamSkills = getSkills(t);

  return (
    <section className="skills" {...props}>
      <div
        className="container container--home-page"
        data-aos={animationName}
      >
        <h2 className="title-type-2 skills__title">
          {t('titleSection')}
          {' '}
          <span className="skills__gradient-title">{t('gradientTitleSection')}</span>
        </h2>

        {teamSkills.map((item, index) => (
          <Accordion
            key={item.title}
            title={item.title}
            scope={item.scope}
            titleServices={t('titleServices')}
            services={item.services}
            titleTechnologies={t('titleTechnologies')}
            technologies={item.technologies}
            data-aos="fade-up"
            data-aos-delay={50 * (index + 1)}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
