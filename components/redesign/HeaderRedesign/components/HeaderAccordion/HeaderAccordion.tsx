import clsx from 'clsx';
import Link from 'next/link';
import IconDownArrow from '../../../../../icons/icon-arrow-down-redesign.svg';
import { useWindowWidth } from '../../../../../common/hooks/useWindowWidth';
import { HeaderNavigationItem } from '../../../../../common/types';
import { useOnScrollDirections } from '../../../../../common/hooks';

export function HeaderAccordion({
  className,
  navigationListItem,
  isOpen,
  onToggle,
}: {
  className?: string;
  navigationListItem: HeaderNavigationItem;
  isOpen: boolean;
  onToggle: (id: number) => void;
}) {
  const {
    id,
    name,
    navItems,
  } = navigationListItem;

  const {
    isTabletXl,
  } = useWindowWidth();

  const isHidden = useOnScrollDirections();

  const chunks = isTabletXl ? chunksArray(navItems) : [navItems];

  return (
    <div
      className={clsx(
        `header-accordion`,
        className,
        {
          'header-accordion--left-align': chunks.length <= 2,
        },
      )}
      {...(isTabletXl ? {
        onMouseEnter: () => onToggle(id),
        onMouseLeave: () => onToggle(id),
      } : {})}
    >
      <button
        className="header-accordion__button"
        type="button"
        {...(!isTabletXl ? {
          onClick: () => onToggle(id),
        } : {})}
        onFocus={() => onToggle(id)}
      >
        <span className="header-accordion__label">
          {name}
        </span>
        <IconDownArrow
          aria-hidden="true"
          className={clsx(
            `header-accordion__arrow`,
            {
              'header-accordion__arrow--open': isOpen,
            },
          )}
        />
      </button>

      {isOpen && !isHidden && (
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
