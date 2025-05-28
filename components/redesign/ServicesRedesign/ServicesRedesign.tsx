import { useTranslation } from 'next-i18next';
import ServicesCardRedesign from '../ServicesCardRedesign/ServicesCardRedesign';

type NewServicesList = {
  title?: string;
  skillsList?: string[];
  link?: string;
  linkText?: string;
  theme: 'white' | 'grey' | 'black' | 'blue';
  image?: string
}[];

function ServicesRedesign() {
  const { t } = useTranslation('servicesRedesign');

  const newServicesList: NewServicesList = t('list', { returnObjects: true });

  return (
    <section
      className="services-redesign"
    >
      <ul className="grid">
        <li className="services-redesign__card col-tablet-3">
          <h2 className="services-redesign__title">
            {t('title')}
          </h2>
        </li>
        {newServicesList.map(({
          title, skillsList, link, linkText, theme, image,
        }) => (
          <li
            key={title}
            className="services-redesign__card col-tablet-3"
          >
            <ServicesCardRedesign
              title={title}
              skillsList={skillsList}
              link={link}
              linkText={linkText}
              theme={theme}
              image={image}
            />
          </li>
        ))}

      </ul>

    </section>
  );
}

export default ServicesRedesign;
