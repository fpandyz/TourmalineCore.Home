import { useTranslation } from 'next-i18next';

import { getAbility } from './getAbility';
import Accordion from '../Accordion/Accordion';

function Ability() {
  const { t } = useTranslation('ability');

  const teamMembers = getAbility(t);

  return (
    <section className="ability">
      <h2 className="title-type-2 ability__title">
        Наши
        {' '}
        <span className="ability__gradient-title">возможности</span>
      </h2>

      {teamMembers.map((item) => (
        <Accordion
          key={item.title}
          title={item.title}
          scope={item.scope}
          services={item.services}
          technologies={item.technologies}
        />
      ))}
    </section>
  );
}

export default Ability;
