import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import IconDownArrow from '../../../../../icons/icon-arrow-down-redesign2.svg';

export function HeaderAccordion({
  className,
}: {
  className?: string;
}) {
  const [isTooltipOpened, setIsTooltipOpened] = useState(false);

  return (
    <div
      className={clsx(
        `header-accordion`,
        className,
      )}
    >
      <button
        className="header-accordion__button"
        type="button"
        onClick={() => setIsTooltipOpened(!isTooltipOpened)}
      >
        <span className="header-accordion__label">
          Направления
        </span>
        <IconDownArrow
          aria-hidden="true"
          className={clsx(
            `header-accordion__arrow`,
            {
              'header-accordion__arrow--open': isTooltipOpened,
            },
          )}
        />
      </button>

      {isTooltipOpened && (
        <ul className="header-accordion__list">
          <li className="header-accordion__list-item">
            <Link
              className="header-accordion__link"
              href="#"
            >
              Frontend
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
