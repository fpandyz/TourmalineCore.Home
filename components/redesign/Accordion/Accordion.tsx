import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import IconDownArrow from '../../../icons/icon-arrow-down-redesign.svg';

export function Accordion() {
  const [isTooltipOpened, setIsTooltipOpened] = useState(false);

  return (
    <div className="accordion">
      <button
        className="accordion__button"
        type="button"
        onClick={() => setIsTooltipOpened(!isTooltipOpened)}
      >
        <span className="accordion__label">
          Какой-то текст
        </span>
        <IconDownArrow
          aria-hidden="true"
          className={clsx(
            `accordion__arrow`,
            {
              'accordion__arrow--open': isTooltipOpened,
            },
          )}
        />
      </button>
      {isTooltipOpened && (
        <ul className="accordion__list">
          <li className="accordion__item">
            <Link
              className="accordion__link"
              href="#"
            >
              Какой-то элемент
            </Link>
          </li>
          <li className="accordion__item">
            <Link
              className="accordion__link"
              href="#"
            >
              Какой-то элемент
            </Link>
          </li>
          <li className="accordion__item">
            <Link
              className="accordion__link"
              href="#"
            >
              Какой-то элемент
            </Link>
          </li>
          <li className="accordion__item">
            <Link
              className="accordion__link"
              href="#"
            >
              Какой-то элемент
            </Link>
          </li>
          <li className="accordion__item">
            <Link
              className="accordion__link"
              href="#"
            >
              Какой-то элемент
            </Link>
          </li>
          <li className="accordion__item">
            <Link
              className="accordion__link"
              href="#"
            >
              Какой-то элемент
            </Link>
          </li>
          <li className="accordion__item">
            <Link
              className="accordion__link"
              href="#"
            >
              Какой-то элемент
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
