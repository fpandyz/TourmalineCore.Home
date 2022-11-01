import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';
import isChineseLanguage from '../../common/utils/isChineseLanguage';

import IconlLargeArrow from '../../icons/icon-large-arrow.svg';

interface AccordionProp extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  scope: string[];
  titleServices: string;
  services: string[];
  titleTechnologies: string;
  technologies: string[];
  clickedAccarion?: () => unknown;
}
function Accordion({
  title,
  scope,
  titleServices,
  services,
  titleTechnologies,
  technologies,
  clickedAccarion,
  ...props
}: AccordionProp): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx('accordion', {
      'accordion--zh': isChineseLanguage(),
    })}
    >
      <button
        type="button"
        onClick={() => {
          if (clickedAccarion) {
            clickedAccarion();
          }

          setIsOpen(!isOpen);
        }}
        className="accordion__button"
        {...props}
      >
        <div className="accordion__inner">
          <div className="title-type-3 accordion__title">{title}</div>
          <IconlLargeArrow className={clsx('accordion__icon', {
            'accordion__icon--is-open': isOpen,
          })}
          />
        </div>
        <ul className={clsx('accordion__labels', {
          'accordion__labels--hiden': isOpen,
        })}
        >
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
            <h4 className="title-type-4 accordion__subtitle">{titleServices}</h4>
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
            <h3 className="title-type-4 accordion__subtitle">{titleTechnologies}</h3>
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
