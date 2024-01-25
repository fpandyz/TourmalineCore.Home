import ServicesTechnologyCard from './ServicesTechnologyCard/ServicesTechnologyCard';

const SERVICES_TECHNOLOGY_TITLE = 'Вы можете заказать не только frontend, но и другие направления разработки';
const SERVICES_TECHNOLOGY_LIST = [
  {
    title: 'UI/UX дизайн',
    description: 'Разработаем внешний вид системы',
  },
  {
    title: 'Backend',
    description: 'Создадим  инфраструктуру и серверную часть ',
  },
  {
    title: 'ML',
    description: 'Добавим искусственный интеллект ',
  },
  {
    title: 'QA',
    description: 'Протестируем систему',
  },
];

export default function ServicesTechnology() {
  return (
    <section className="services-technology">
      <div className="container services-technology__wrapper">
        <div className="services-technology__inner">
          <h3 className="title-technology-type-1 services-technology__title">{SERVICES_TECHNOLOGY_TITLE}</h3>
          <ul className="services-technology__list">
            {SERVICES_TECHNOLOGY_LIST.map(({ title, description }) => (
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
