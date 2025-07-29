import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import IconDownArrow from '../../../../../icons/icon-arrow-down-redesign2.svg';
// TODO: Move the type to a separate file?
// eslint-disable-next-line import/no-cycle
import { HeaderNavigationItem } from '../HeaderNavigationListRedesign/HeaderNavigationListRedesign';

export function HeaderAccordion({
  className,
  navigationListItem,
}: {
  className?: string;
  navigationListItem: HeaderNavigationItem;
}) {
  const {
    name,
    navItems,
  } = navigationListItem;

  const [isTooltipOpened, setIsTooltipOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia(`(max-width: 1023px)`).matches);
    };

    checkScreenSize();
    window.addEventListener(`resize`, checkScreenSize);

    return () => window.removeEventListener(`resize`, checkScreenSize);
  }, []);

  return (
    <div
      className={clsx(
        `header-accordion`,
        className,
      )}
      {...(!isMobile ? {
        onMouseEnter: () => setIsTooltipOpened(true),
        onMouseLeave: () => setIsTooltipOpened(false),
      } : {})}
    >
      <button
        className="header-accordion__button"
        type="button"
        {...(isMobile ? {
          onClick: () => setIsTooltipOpened(!isTooltipOpened),
        } : {})}
      >
        <span className="header-accordion__label">
          {name}
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
          {navItems.map((el) => (
            <li
              className="header-accordion__list-item"
              key={el.id}
            >
              <Link
                className="header-accordion__link"
                href={el.link}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
