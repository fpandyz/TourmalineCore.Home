import { useTranslationNamespace } from '../../common/hooks/useTranslationNamespace';
import ServicesTechnologyCard from './components/ServicesTechnologyCard/ServicesTechnologyCard';
import { TServicesTechnologyList } from './types';

export default function ServicesTechnology() {
  const { t } = useTranslationNamespace('servicesTechnology');

  const servicesTechnologyList: TServicesTechnologyList = t('list', { returnObjects: true });

  return (
    <section className="services-technology">
      <div className="container services-technology__wrapper">
        <div className="services-technology__inner">
          <h3 className="title-technology-type-1 services-technology__title">{t('title')}</h3>
          <ul className="services-technology__list">
            {servicesTechnologyList.map(({ title, description }) => (
              <li key={title} className="services-technology__item">
                <ServicesTechnologyCard title={title} description={description} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
