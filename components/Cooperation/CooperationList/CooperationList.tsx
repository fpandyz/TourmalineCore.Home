const COOPERATION_LIST = [
  {
    title: 'Аутстафф',
    description: 'Выделяем для вас сотрудника или команду разработчиков, вы сами ставите им задачи и отслеживаете прогресс',
  },
  {
    title: 'Аутсорс',
    description: 'Собираем команду под ваш проект, вместе формулируем задачи и движемся к поставленным целям',
  },
];

export default function CooperationList() {
  return (
    <ul className="cooperation-list">
      {COOPERATION_LIST.map(({ title, description }) => (
        <li key={title} className="cooperation-list__item">
          <h4 className="title-technology-type-2 cooperation-list__title">{title}</h4>
          <span className="title-technology-type-3 cooperation-list__description">{description}</span>
        </li>
      ))}
    </ul>
  );
}
