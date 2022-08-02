import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';

import IconDownArrow from '../../icons/icon-large-arrow.svg';

interface AccordionProp extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  scope: string[];
  services: string[];
  technologies: string[];
}
function Accordion({
  title,
  scope,
  services,
  technologies,
  ...props
}: AccordionProp): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="accordion__button"
        {...props}
      >
        <div className="accordion__inner">
          <div className="title-type-3 accordion__title">{title}</div>
          <IconDownArrow className={clsx('accordion__icon', {
            'accordion__icon--is-open': isOpen,
          })}
          />
        </div>
        <ul className="accordion__labels">
          {scope.map((scopeItem) => (
            <li
              key={scopeItem}
              className="accordion__label"
            >
              {scopeItem}
            </li>
          ))}
        </ul>
      </button>

      {isOpen && (
        <div className="accordion__content">
          <div>
            <h4 className="title-type-4 accordion__subtitle">Услуги</h4>
            <ul className="accordion__services">
              {services.map((service) => (
                <li
                  key={service}
                  className="accordion__service-item"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="title-type-4 accordion__subtitle">Технологии</h3>
            <ul className="accordion__technologies">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="accordion__technology-item"
                >
                  {technology}
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
