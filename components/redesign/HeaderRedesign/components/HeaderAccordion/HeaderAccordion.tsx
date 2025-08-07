import clsx from 'clsx';
import Link from 'next/link';
import IconDownArrow from '../../../../../icons/icon-arrow-down-redesign.svg';
import { HeaderNavigationItem } from '../../../../../common/types';
import { useDeviceSize, useOnScrollDirections } from '../../../../../common/hooks';

export function HeaderAccordion({
  className,
  navigationItems,
  isOpen,
  onToggle,
}: {
  className?: string;
  navigationItems: HeaderNavigationItem;
  isOpen: boolean;
  onToggle: (id: number) => void;
}) {
  const {
    id,
    name,
    navItems,
  } = navigationItems;

  const {
    isTabletXl,
  } = useDeviceSize();

  const {
    isScrollUp,
  } = useOnScrollDirections();

  const chunks = isTabletXl ? chunksArray(navItems) : [navItems];

  return (
    <div
      className={clsx(
        `header-accordion`,
        className,
        {
          'header-accordion--left-align': chunks.length > 2,
        },
      )}
      data-testid="header-accordion"
    >
      <button
        className="header-accordion__button"
        data-testid="header-accordion-button"
        type="button"
        {...(!isTabletXl && {
          onClick: () => onToggle(id),
        })}
      >
        <span className="header-accordion__label">
          {name}
        </span>
        <IconDownArrow
          className={clsx(
            `header-accordion__arrow`,
            {
              'header-accordion__arrow--open': isOpen,
            },
          )}
          aria-hidden="true"
        />
      </button>

      {(isTabletXl || isOpen) && isScrollUp && (
        <div
          className={clsx(
            `header-accordion__list-wrapper`,
            {
              'container-redesign': chunks.length > 2,
            },
          )}
        >
          {chunks.map((group, index) => (
            <ul
              className="header-accordion__list"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              {group.map((el) => (
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
          ))}
        </div>
      )}
    </div>
  );
}

function chunksArray(items: HeaderNavigationItem["navItems"]) {
  const chunks: HeaderNavigationItem["navItems"][] = [];

  for (let i = 0; i < items.length; i += 6) {
    chunks.push(items.slice(i, i + 6));
  }

  return chunks;
}
