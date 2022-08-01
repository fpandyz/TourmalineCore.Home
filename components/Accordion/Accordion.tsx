import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';

import IconDownArrow from '../../icons/icon-large-arrow.svg';

const data = [
  {
    title: 'Фрон',
    scope: ['.Net Core 3-6', 'C#', 'Python', 'Flask', 'FastAPI', 'JavaScript', 'NestJS', 'NodeJS', 'PostgreSQL', 'Clickhouse'],
    services: [
      'Разработка решений на базе фреймворков',
      'Интеграция со сторонними сервисами, решениями',
      'Работа с реляционными и аналитическими СУБД',
      'Проектирование архитектуры и работы с высокими нагрузками',
      'Разработка встраиваемых систем и интеграция с IoT',
      'Автоматизация сборки, деплоя, релизов и тестирования',
      'Рефакторинг',
      'Разработка библиотек',
      'TDD и DDD проектирование',
    ],
    technologies: [
      '.Net Core 3-6',
      'Clickhouse',
      'React',
      'PostgreSQL',
      'k8s',
      'RabbitMQ',
      'Redis',
      'Docker',
      'Entity Framework Core',
      'XUnit',
      'Cypress',
      'Blazor',
      'Azure',
      'Gitlab CI',
      'Mail.ru Cloud',
      'Yandex.Cloud',
      'Postman API',
      'NestJS',
      'Flask',
      'REST',
    ],
  }];

interface AccordionProp extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title?: string;
}

function Accordion({ className, ...props }: AccordionProp): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx('accordion__button', className, {})}
        {...props}
      >
        <div className="accordion__inner">
          <div className="title-type-3 accordion__title">{data[0].title}</div>
          <IconDownArrow className={clsx('accordion__icon', {
            'accordion__icon--is-open': isOpen,
          })}
          />
        </div>
        <ul className={clsx('accordion__scope', {
          accordion__scope: isOpen,
        })}
        >
          {data[0].scope.map((scopeItem) => (
            <li
              key={scopeItem}
              className="accordion__scope-item"
            >
              {scopeItem}
            </li>
          ))}
        </ul>
      </button>

      {isOpen && (
        <div className="accordion__content">
          <div>
            <h4 className="title-type-4 accordion__sub-title">Услуги</h4>
            <ul className="accordion__services">
              {data[0].services.map((serviceItem) => (
                <li
                  key={serviceItem}
                  className="accordion__service-item"
                >
                  {serviceItem}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="title-type-4 accordion__sub-title">Технологии</h3>
            <ul className="accordion__technologies">
              {data[0].technologies.map((technologeItem) => (
                <li
                  key={technologeItem}
                  className="accordion__technologe-item"
                >
                  {technologeItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
