import { useTranslation } from 'next-i18next';

import { Element } from 'react-scroll';
import { getSkills } from './getSkills';
import Accordion from '../Accordion/Accordion';
import { SectionProps } from '../../types/globals';

interface ISkills extends SectionProps {
  clickedAccarion?: () => unknown;
}

function Skills({
  clickedAccarion,
  animationName,
  id,
  ...props
}: ISkills) {
  const { t } = useTranslation('skills');

  const teamSkills = getSkills(t);

  return (
    <section
      className="skills"
      id={id}
      {...props}
    >
      <Element name={`scroll-to-${id}`}>
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
              clickedAccarion={clickedAccarion}
            />
          ))}
        </div>
      </Element>
    </section>
  );
}

export default Skills;
