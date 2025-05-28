import { useTranslation } from 'next-i18next';
import ServicesCardRedesign from '../ServicesCardRedesign/ServicesCardRedesign';

type NewServicesList = {
  title: string;
  skillsList: string[];
  link: string;
  theme?: boolean
}[];

function ServicesRedesign() {
  const { t } = useTranslation('servicesRedesign');

  const newServicesList: NewServicesList = t('list', { returnObjects: true });

  return (
    <section
      className="services-redesign"
    >
      <ul>
        <li className="services-card-redesign">Услуги</li>
        {newServicesList.map(({ title, skillsList, link }) => (
          <li
            key={title}
            className="list__item"
          >
            <ServicesCardRedesign
              title={title}
              skillsList={skillsList}
              link={link}
              // theme={theme}
            />
          </li>
        ))}

      </ul>

    </section>
  );
}

export default ServicesRedesign;
