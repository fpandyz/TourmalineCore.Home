import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import ServicesTechnologyCard from './components/ServicesTechnologyCard/ServicesTechnologyCard';
import { TServicesTechnologyList } from './types';
import usePath from '../../common/hooks/usePath';
import { TechnologyPageAnchorLink } from '../../common/utils/consts/technology-anchor-link';

export default function ServicesTechnology() {
  const { slicePathname } = usePath();
  const { t } = useTranslationNamespace('servicesTechnology');

  const servicesTechnologyList: TServicesTechnologyList = t('list', { returnObjects: true });

  return (
    <section
      id={TechnologyPageAnchorLink.Services}
      className="services-technology"
    >
      <div className="container services-technology__wrapper">
        <div className="services-technology__inner">
          <h2 className={`title-technology-type-1 services-technology__title services-technology__title--${slicePathname}`}>{t('title')}</h2>
          <ul className="services-technology__list">
            {servicesTechnologyList.map(({ title, description, link }) => (
              <li key={title} className="services-technology__item">
                <ServicesTechnologyCard
                  title={title}
                  description={description}
                  link={link}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
